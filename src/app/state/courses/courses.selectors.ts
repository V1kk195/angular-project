import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.reducer';

export const selectCourses = createFeatureSelector<CoursesState>('courses');

export const selectCoursesList = createSelector(
    selectCourses,
    (state) => state.items
);

export const selectCoursesLength = createSelector(
    selectCourses,
    (state) => state.length
);
