import { createAction, props } from '@ngrx/store';
import { Course, CourseApiModel } from '../../types/course';

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

export const deleteCourse = createAction(
    '[Courses Page] Delete Course',
    props<{ id: string; count: number }>()
);

export const deleteCourseSuccess = createAction(
    '[Courses API] Delete Course Success'
);

export const deleteCourseFailure = createAction(
    '[Courses API] Delete Course Failure',
    props<{ error: any }>()
);

export const createCourse = createAction(
    '[Add New Course Page] Create Course',
    props<{ course: CourseApiModel }>()
);

export const createCourseSuccess = createAction(
    '[Courses API] Create Course Success'
);

export const createCourseFailure = createAction(
    '[Courses API] Create Course Failure',
    props<{ error: any }>()
);

export const updateCourse = createAction(
    '[Edit Course Page] Update Course Failure',
    props<{ course: CourseApiModel }>()
);

export const updateCourseSuccess = createAction(
    '[Courses API] Update Course Success'
);

export const updateCourseFailure = createAction(
    '[Courses API] Update Course Failure',
    props<{ error: any }>()
);
