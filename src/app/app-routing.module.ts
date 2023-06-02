import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ROUTES_NAMES } from './core/constants';
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
        canActivate: [authGuard],
        loadChildren: () =>
            import('./courses-page/courses-page.module').then(
                (m) => m.CoursesPageModule
            ),
    },

    { path: '**', component: NotFoundPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
