import { authReducer, AuthState } from './auth/auth.reducer';
import { coursesReducer, CoursesState } from './courses/courses.reducer';

export interface AppState {
    auth: AuthState;
    courses: CoursesState;
}

export const rootReducer = {
    auth: authReducer,
    courses: coursesReducer,
};
