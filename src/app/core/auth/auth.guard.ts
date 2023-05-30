import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { ROUTES_NAMES } from '../constants';
import { selectUser } from '../../state/auth/auth.selectors';

export const authGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const store = inject(Store);
    let user = null;

    store.select(selectUser).subscribe((data) => {
        user = !!data;
    });

    if (user) {
        return true;
    }

    return router.navigateByUrl(`/${ROUTES_NAMES.login}`);
};
