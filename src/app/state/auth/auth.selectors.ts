import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import { authFeatureKey } from './featureKey';

export const selectAuth = createFeatureSelector<AuthState>(authFeatureKey);

export const selectUser = createSelector(
    selectAuth,
    (authState) => authState.user
);
