import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.reducer';
import { coursesFeatureKey } from './featureKey';

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
