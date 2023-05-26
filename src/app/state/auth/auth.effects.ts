import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    ofType,
    ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { AuthService } from '../../core/auth/auth.service';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { AuthActions } from '.';
import { CurrentUserResponse, User } from '../../types';
import { Router } from '@angular/router';
import { ROUTES_NAMES } from '../../core/constants';
import { CookieService } from 'ngx-cookie-service';

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
                            )
                        )
                    ),
                    catchError((err) => of(AuthActions.authFailure(err)))
                )
            )
        );
    });

    loginSuccess$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.authSuccess),
                tap(() => {
                    this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`);
                })
            );
        },
        { dispatch: false }
    );

    logout$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.logout),
                tap(() => {
                    this.cookieService.delete('token');
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
        private router: Router,
        private cookieService: CookieService
    ) {}
}
