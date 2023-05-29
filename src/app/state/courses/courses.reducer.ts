import { createReducer, on } from '@ngrx/store';

import { CoursesActions } from '.';
import { Course } from '../../types/course';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    items: Course[];
    length: number;
}

export const initialState: CoursesState = {
    items: [],
    length: 0,
};

export const coursesReducer = createReducer(
    initialState,
    on(
        CoursesActions.loadCoursesSuccess,
        (state, { data }): CoursesState => ({
            ...state,
            items: data,
            length: data.length,
        })
    )
);
