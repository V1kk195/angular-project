import { createAction, props } from '@ngrx/store';
import { LoginRequest, User } from 'src/app/types';

export const login = createAction(
    '[Login Page] Login',
    props<{ credentials: LoginRequest }>()
);

export const authSuccess = createAction(
    '[Auth API] Auth Success',
    props<{ user: User }>()
);

export const authFailure = createAction(
    '[Auth API] Auth Failure',
    props<{ error: unknown }>()
);

export const logout = createAction('[Header] Logout');
