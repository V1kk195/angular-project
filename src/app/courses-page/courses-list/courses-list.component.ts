import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from '../../types/course';
import { CoursesService } from '../../core/courses-services/courses.service';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
    private nextStartPoint = 0;
    private subs: Subscription[] = [];

    constructor(public coursesService: CoursesService) {}

    public ngOnInit(): void {
        this.getCourses();
    }

    public ngOnDestroy(): void {
        this.subs.forEach((item) => item.unsubscribe());
    }

    private getCourses(start?: number, count?: number): void {
        const sub = this.coursesService
            .getCourses(start, count)
            .subscribe((data) => {
                this.nextStartPoint = this.nextStartPoint + 5;
            });

        this.subs.push(sub);
    }

    public onLoadMoreClick(): void {
        this.getCourses(this.nextStartPoint);
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
