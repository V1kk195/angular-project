import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';

import { Course } from '../../types/course';
import { CoursesService } from '../../core/courses-services/courses.service';
import { LoaderService } from '../../shared/loader/service/loader.service';
import { Store } from '@ngrx/store';
import {
    CoursesActions,
    selectCoursesLength,
    selectCoursesList,
} from 'src/app/state/courses';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
    private nextStartPoint = 5;
    private subs: Subscription[] = [];
    public coursesEnded = false;
    public courses$ = this.store.select(selectCoursesList);
    public coursesCount$ = this.store.select(selectCoursesLength);

    constructor(
        public coursesService: CoursesService,
        public loaderService: LoaderService,
        private store: Store
    ) {}

    public ngOnInit(): void {
        this.store.dispatch(CoursesActions.loadCourses());
    }

    public ngOnDestroy(): void {
        this.subs.forEach((item) => item.unsubscribe());
    }

    private getCourses(start?: number, count?: number): void {
        this.loaderService.setIsLoading(true);

        const sub = this.coursesService
            .getCourses(start, count)
            .pipe(finalize(() => this.loaderService.setIsLoading(false)))
            .subscribe((data) => {
                this.nextStartPoint = this.nextStartPoint + 5;

                if (!data.length) {
                    this.coursesEnded = true;
                }
            });

        this.subs.push(sub);
    }

    public onLoadMoreClick(): void {
        this.getCourses(0, this.nextStartPoint);
    }

    public onDeleteCourse(courseId: string): void {
        const res = confirm('Do you really want to delete this course?');

        if (res) {
            const sub = this.coursesService
                .deleteCourse(courseId, this.nextStartPoint)
                .subscribe();

            this.subs.push(sub);
        }
    }

    public courseTrackBy(index: number, course: Course): string {
        return course.id;
    }
}
