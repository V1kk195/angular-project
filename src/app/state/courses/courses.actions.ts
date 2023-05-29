import { createAction, props } from '@ngrx/store';
import { Course } from '../../types/course';

export const loadCourses = createAction(
    '[Courses Page] Load Courses',
    props<{ start?: number; count?: number }>()
);

export const loadCoursesSuccess = createAction(
    '[Courses API] Get Courses Success',
    props<{ data: Course[] }>()
);

export const loadCoursesFailure = createAction(
    '[Courses API] Get Courses Failure',
    props<{ error: any }>()
);
