import { createReducer, on } from '@ngrx/store';

import { CoursesActions } from '.';
import { Course } from '../../types/course';

export interface CoursesState {
    items: Course[];
    length: number;
    start: number;
    count: number;
    errorMessage: string;
}

export const initialState: CoursesState = {
    items: [],
    length: 0,
    start: 0,
    count: 5,
    errorMessage: '',
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
    ),
    on(
        CoursesActions.loadCoursesFailure,
        (state, { error }): CoursesState => ({
            ...state,
            errorMessage: error,
        })
    ),
    on(
        CoursesActions.deleteCourseFailure,
        (state, { error }): CoursesState => ({
            ...state,
            errorMessage: error,
        })
    )
);
