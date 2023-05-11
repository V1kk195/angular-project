import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { AddCourseComponent } from './courses-page/add-course/add-course.component';
import { EditCourseComponent } from './courses-page/edit-course/edit-course.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ROUTES_NAMES } from './core/constants/routes';
import { LoginPageComponent } from './login-page/login-page.component';
import { authGuard } from './core/auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: `/${ROUTES_NAMES.courses}`, pathMatch: 'full' },
    {
        path: ROUTES_NAMES.login,
        pathMatch: 'full',
        component: LoginPageComponent,
    },
    {
        path: ROUTES_NAMES.courses,
        component: CoursesPageComponent,
        title: 'Courses',
        canActivate: [authGuard],
    },
    {
        path: ROUTES_NAMES.addCourse,
        component: AddCourseComponent,
        title: 'Add new course',
        canActivate: [authGuard],
    },
    {
        path: `${ROUTES_NAMES.courses}/:id`,
        component: EditCourseComponent,
        canActivate: [authGuard],
    },
    { path: '**', component: NotFoundPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
