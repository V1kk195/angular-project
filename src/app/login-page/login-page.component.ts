import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

import { AuthService } from '../core/auth/auth.service';
import { AuthActions } from '../state/auth';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
    email = '';
    password = '';

    constructor(
        private authService: AuthService,
        private router: Router,
        private store: Store
    ) {}

    public onLogIn(form: NgForm) {
        this.store.dispatch(
            AuthActions.login({
                credentials: { login: this.email, password: this.password },
            })
        );
    }
}
