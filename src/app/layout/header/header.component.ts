import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ROUTES_NAMES } from '../../core/constants';
import { Store } from '@ngrx/store';
import { selectUser } from '../../state/auth/auth.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public userInfo$ = this.store.select(selectUser);

    constructor(
        public authService: AuthService,
        private router: Router,
        private store: Store
    ) {}

    public onLogOut() {
        this.authService.logOut();
        this.router.navigateByUrl(`/${ROUTES_NAMES.login}`);
    }
}
