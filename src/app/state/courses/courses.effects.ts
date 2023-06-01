import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesActions } from '.';
import { CoursesService } from '../../core/courses-services/courses.service';
import { LoaderService } from '../../shared/loader/service/loader.service';
import { ROUTES_NAMES } from '../../core/constants';

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

    createCourse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CoursesActions.createCourse),
            exhaustMap(({ course }) => {
                return this.coursesService.createCourse(course).pipe(
                    map(() => CoursesActions.createCourseSuccess()),
                    catchError((err) =>
                        of(CoursesActions.createCourseFailure(err))
                    )
                );
            })
        );
    });

    createCourseSuccess$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(CoursesActions.createCourseSuccess),
                tap(() => this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`))
            );
        },
        { dispatch: false }
    );

    updateCourse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CoursesActions.updateCourse),
            exhaustMap(({ course }) => {
                return this.coursesService.updateCourse(course).pipe(
                    map(() => CoursesActions.updateCourseSuccess()),
                    catchError((err) =>
                        of(CoursesActions.updateCourseFailure(err))
                    )
                );
            })
        );
    });

    updateCourseSuccess$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(CoursesActions.updateCourseSuccess),
                tap(() => this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`))
            );
        },
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private loaderService: LoaderService,
        private route: ActivatedRoute,
        private router: Router
    ) {}
}
