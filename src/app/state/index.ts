import { coursesReducer, CoursesState } from './courses/courses.reducer';
import { authFeatureKey } from './auth/featureKey';
import { coursesFeatureKey } from './courses/featureKey';
import { authReducer, AuthState } from './auth/auth.reducer';

export interface AppState {
    [authFeatureKey]: AuthState;
    [coursesFeatureKey]: CoursesState;
}

export const rootReducer = {
    [authFeatureKey]: authReducer,
    [coursesFeatureKey]: coursesReducer,
};
