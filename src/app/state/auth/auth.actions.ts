import { createAction, props } from '@ngrx/store';
import { LoginRequest, User } from 'src/app/types';

export const login = createAction('[Auth] Auth', props<LoginRequest>);

export const loginSuccess = createAction(
    '[Auth] Auth Success',
    props<{ user: User }>()
);

export const loginFailure = createAction(
    '[Auth] Auth Failure',
    props<{ error: unknown }>()
);

export const logout = createAction('[Auth] Logout');
