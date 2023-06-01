import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    ofType,
    ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { AuthActions } from '.';
import { CurrentUserResponse, User } from '../../types';
import { ROUTES_NAMES } from '../../core/constants';

const setTokenCookie = (token: string): void => {
    document.cookie = `token=${token}`;
};

const mapUserInfo = (userInfo: CurrentUserResponse): User => {
    return {
        id: String(userInfo.id),
        firstName: userInfo.name.first,
        lastName: userInfo.name.last,
    };
};

@Injectable()
export class AuthEffects {
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.login),
            exhaustMap((action) =>
                this.authService.logIn(action.credentials).pipe(
                    tap(({ token }) => {
                        setTokenCookie(token);
                    }),
                    mergeMap(() =>
                        this.authService.getUserInfo().pipe(
                            map((userInfo) =>
                                AuthActions.authSuccess({
                                    user: mapUserInfo(userInfo),
                                })
                            ),
                            tap(() =>
                                this.router.navigateByUrl(
                                    `/${ROUTES_NAMES.courses}`
                                )
                            )
                        )
                    ),
                    catchError((err) => of(AuthActions.authFailure(err)))
                )
            )
        );
    });

    logout$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.logout),
                tap(() => {
                    this.authService.logOut();
                    this.router.navigateByUrl(`/${ROUTES_NAMES.login}`);
                })
            );
        },
        { dispatch: false }
    );

    init$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            mergeMap(() => {
                return this.authService.getUserInfo().pipe(
                    map((userInfo) =>
                        AuthActions.authSuccess({
                            user: mapUserInfo(userInfo),
                        })
                    ),
                    catchError((err) => of(AuthActions.authFailure(err)))
                );
            })
        );
    });

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}
}
