import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coursesFeatureKey, CoursesState } from './courses.reducer';

export const selectCourses =
    createFeatureSelector<CoursesState>(coursesFeatureKey);

export const selectCoursesList = createSelector(
    selectCourses,
    (state) => state.items
);

export const selectCoursesLength = createSelector(
    selectCourses,
    (state) => state.length
);
