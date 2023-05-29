import { createReducer, on } from '@ngrx/store';

import { CoursesActions } from '.';
import { Course } from '../../types/course';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    items: Course[];
    length: number;
    start: number;
    count: number;
}

export const initialState: CoursesState = {
    items: [],
    length: 0,
    start: 0,
    count: 5,
};

export const coursesReducer = createReducer(
    initialState,
    on(
        CoursesActions.loadCoursesSuccess,
        (state, { data }): CoursesState => ({
            ...state,
            items: data,
            length: data.length,
            count: state.count + 5,
        })
    )
);
