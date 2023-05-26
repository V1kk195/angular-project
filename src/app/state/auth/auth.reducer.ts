import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from 'src/app/types';

export interface AuthState {
    user: User | null;
}

export const initialState: AuthState = {
    user: null,
};

export const authReducer = createReducer(
    initialState,
    on(
        AuthActions.authSuccess,
        (state, { user }): AuthState => ({ ...state, user })
    ),
    on(AuthActions.logout, (state): AuthState => ({ ...state, user: null }))
);
