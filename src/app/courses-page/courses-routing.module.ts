import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';
import { authGuard } from '../core/auth/auth.guard';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { courseInfoResolver } from './course/resolver/course.resolver';

const routes: Routes = [
    {
        path: '',
        component: CoursesPageComponent,
        title: 'Courses',
        data: {
            breadcrumbs: {
                caption: 'Courses',
            },
        },
        children: [
            {
                path: '',
                component: CoursesListComponent,
                pathMatch: 'full',
                data: {
                    breadcrumbs: null,
                },
            },
            {
                path: `new`,
                component: AddCourseComponent,
                title: 'Add new course',
                canActivate: [authGuard],
                data: {
                    breadcrumbs: {
                        caption: 'New Course',
                    },
                },
            },
            {
                path: `:id`,
                component: EditCourseComponent,
                canActivate: [authGuard],
                data: {
                    breadcrumbs: {
                        caption: 'Edit Course',
                    },
                },
                resolve: {
                    course: courseInfoResolver,
                },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoursesRoutingModule {}
