import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';

import { CoursesActions } from '.';
import { CoursesService } from '../../core/courses-services/courses.service';
import { LoaderService } from '../../shared/loader/service/loader.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class CoursesEffects {
    loadCourses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CoursesActions.loadCourses),
            tap(() => this.loaderService.setIsLoading(true)),
            exhaustMap(({ start, count }) => {
                const searchValue =
                    this.route.snapshot.queryParamMap.get('search') || '';
                console.log('search', searchValue);

                return this.coursesService
                    .getCourses(start, count, 'date', searchValue)
                    .pipe(
                        map((data) =>
                            CoursesActions.loadCoursesSuccess({ data: data })
                        ),
                        catchError((err) =>
                            of(CoursesActions.loadCoursesFailure(err))
                        )
                    );
            })
        );
    });

    loadCoursesSuccess$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(CoursesActions.loadCoursesSuccess),
                tap(() => {
                    this.loaderService.setIsLoading(false);
                })
            );
        },
        { dispatch: false }
    );

    deleteCourse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CoursesActions.deleteCourse),
            tap(() => this.loaderService.setIsLoading(true)),
            exhaustMap(({ id, count }) =>
                this.coursesService.deleteCourse(id).pipe(
                    mergeMap(() => [
                        CoursesActions.deleteCourseSuccess,
                        CoursesActions.loadCourses({ start: 0, count }),
                    ]),
                    catchError((err) =>
                        of(CoursesActions.deleteCourseFailure(err))
                    )
                )
            )
        );
    });

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private loaderService: LoaderService,
        private route: ActivatedRoute
    ) {}
}
