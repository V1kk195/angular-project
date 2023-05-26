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

    if (store.select(selectUser)) {
        return true;
    }

    return router.navigateByUrl(`/${ROUTES_NAMES.login}`);
};
