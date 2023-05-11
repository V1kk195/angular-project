import { Component, Input } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { ROUTES_NAMES } from '../core/routes';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
    @Input() email = '';
    @Input() password = '';

    constructor(private authService: AuthService, private router: Router) {}

    public onLogIn() {
        this.authService
            .logIn({ email: this.email, password: this.password })
            .subscribe((data) => {
                localStorage.setItem('token', data.token);
                this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`);
            });
    }
}
