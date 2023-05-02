import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { LoginPageModule } from './login-page/login-page.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoursesPageModule,
        SharedModule,
        LayoutModule,
        LoginPageModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
