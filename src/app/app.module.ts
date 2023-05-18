import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { LoginPageModule } from './login-page/login-page.module';
import { httpInterceptorProviders } from './core/interceptors';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoursesPageModule,
        SharedModule,
        LayoutModule,
        LoginPageModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
