import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { LoginPageModule } from './login-page/login-page.module';
import { httpInterceptorProviders } from './core/interceptors';
import { AuthEffects } from './state/auth/auth.effects';
import { rootReducer } from './state';
import { CookieService } from 'ngx-cookie-service';

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
        StoreModule.forRoot(rootReducer),
        EffectsModule.forRoot([AuthEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
            trace: true,
        }),
    ],
    providers: [httpInterceptorProviders, CookieService],
    bootstrap: [AppComponent],
})
export class AppModule {}
