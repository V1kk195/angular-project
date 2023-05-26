import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from 'src/app/types';

export const authFeatureKey = 'auth';

export interface AuthState {
    user: User | null;
}

export const initialState: AuthState = {
    user: null,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state): AuthState => ({ ...state })),
    on(
        AuthActions.loginSuccess,
        (state, { user }): AuthState => ({ ...state, user })
    )
);
