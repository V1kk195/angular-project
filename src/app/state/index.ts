import { authReducer, AuthState } from './auth/auth.reducer';

export interface AppState {
    auth: AuthState;
}

export const rootReducer = {
    auth: authReducer,
};
