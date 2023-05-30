import { authFeatureKey, authReducer, AuthState } from './auth/auth.reducer';
import {
    coursesFeatureKey,
    coursesReducer,
    CoursesState,
} from './courses/courses.reducer';

export interface AppState {
    [authFeatureKey]: AuthState;
    [coursesFeatureKey]: CoursesState;
}

export const rootReducer = {
    [authFeatureKey]: authReducer,
    [coursesFeatureKey]: coursesReducer,
};
