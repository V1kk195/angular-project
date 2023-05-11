import { Component, OnInit } from '@angular/core';
import { Course } from '../../types/course';
import { CoursesService } from '../../core/courses-services/courses.service';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    public courses: Course[] = [];
    private nextStartPoint = 0;

    constructor(private coursesService: CoursesService) {}

    public ngOnInit(): void {
        this.getCourses();
    }

    private getCourses(start?: number): void {
        this.coursesService.getCourses(start).subscribe((data) => {
            this.courses = [...this.courses, ...data];
            this.nextStartPoint = this.nextStartPoint + 5;
        });
    }

    public onLoadMoreClick(): void {
        this.getCourses(this.nextStartPoint);
        console.log('Load more courses clicked');
    }

    public onDeleteCourse(courseId: string): void {
        console.log(`Deleted course ${courseId}`);
        const res = confirm('Do you really want to delete this course?');

        if (res) {
            this.coursesService.deleteCourse(courseId);
            this.getCourses();
        }
    }

    public courseTrackBy(index: number, course: Course): string {
        return course.id;
    }
}
