import { Component, Input } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
    @Input() email = '';
    @Input() password = '';

    constructor(private authService: AuthService) {}

    public onLogIn() {
        this.authService.logIn({ email: this.email, password: this.password });
    }
}
