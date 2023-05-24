import { Router, ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { EMPTY, mergeMap, of } from 'rxjs';
import { inject } from '@angular/core';

import { Course } from '../../../types/course';
import { CoursesService } from '../../../core/courses-services/courses.service';
import { ROUTES_NAMES } from '../../../core/constants';

export const courseInfoResolver: ResolveFn<Course> = (
    route: ActivatedRouteSnapshot
) => {
    const router = inject(Router);
    const coursesService = inject(CoursesService);
    const id = route.paramMap.get('id')!;

    return coursesService.getCourseById(id).pipe(
        mergeMap((course) => {
            if (course) {
                return of(course);
            } else {
                router.navigate([`/${ROUTES_NAMES.courses}`]);
                return EMPTY;
            }
        })
    );
};
