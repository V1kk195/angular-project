import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../types/course';
import { CoursesService } from '../../core/courses-services/courses.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
    public courses: Course[] = [];
    private nextStartPoint = 0;
    private subs: Subscription[] = [];

    constructor(private coursesService: CoursesService) {}

    public ngOnInit(): void {
        this.getCourses();
    }

    public ngOnDestroy() {
        this.subs.forEach((item) => item.unsubscribe());
    }

    private getCourses(start?: number, count?: number): void {
        const sub = this.coursesService
            .getCourses(start, count)
            .subscribe((data) => {
                this.courses = [...this.courses, ...data];
                this.nextStartPoint = this.nextStartPoint + 5;
            });

        this.subs.push(sub);
    }

    public onLoadMoreClick(): void {
        this.getCourses(this.nextStartPoint);
        console.log('Load more courses clicked');
    }

    public onDeleteCourse(courseId: string): void {
        console.log(`Deleted course ${courseId}`);
        const res = confirm('Do you really want to delete this course?');

        if (res) {
            const sub = this.coursesService
                .deleteCourse(courseId)
                .subscribe(() => {
                    this.courses = [];

                    const sub = this.coursesService
                        .getCourses(0, this.nextStartPoint)
                        .subscribe((data) => {
                            this.courses = [...this.courses, ...data];
                        });

                    this.subs.push(sub);
                });

            this.subs.push(sub);
        }
    }

    public courseTrackBy(index: number, course: Course): string {
        return course.id;
    }
}
