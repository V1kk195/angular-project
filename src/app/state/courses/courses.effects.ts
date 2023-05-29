import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
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
            exhaustMap((action) =>
                this.coursesService.getCourses().pipe(
                    map((data) =>
                        CoursesActions.loadCoursesSuccess({ data: data })
                    ),
                    catchError((err) =>
                        of(CoursesActions.loadCoursesFailure(err))
                    )
                )
            )
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

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private loaderService: LoaderService
    ) {}
}
