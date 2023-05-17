import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ROUTES_NAMES } from '../../core/constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(public authService: AuthService, private router: Router) {}

    public onLogOut() {
        this.authService.logOut();
        this.router.navigateByUrl(`/${ROUTES_NAMES.login}`);
    }

    public onUserClick() {
        this.authService.getUserInfo().subscribe((data) => console.log(data));
    }
}
