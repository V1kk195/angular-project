import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ROUTES_NAMES } from '../../core/constants';
import { CurrentUserResponse } from '../../types';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public userInfo?: CurrentUserResponse;

    constructor(public authService: AuthService, private router: Router) {}

    public ngOnInit() {
        this.authService.getUserInfo().subscribe((data) => {
            this.userInfo = data;
        });
    }

    public onLogOut() {
        this.authService.logOut();
        this.router.navigateByUrl(`/${ROUTES_NAMES.login}`);
    }
}
