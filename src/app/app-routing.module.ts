import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { AddCourseComponent } from './courses-page/add-course/add-course.component';
import { EditCourseComponent } from './courses-page/edit-course/edit-course.component';

const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesPageComponent, title: 'Courses' },
    { path: 'courses/:id', component: EditCourseComponent },
    {
        path: 'courses/new',
        component: AddCourseComponent,
        title: 'Add new course',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
