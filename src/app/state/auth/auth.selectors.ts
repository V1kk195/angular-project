import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectAuthUser = createSelector(
    selectAuth,
    (authState) => authState.user
);
