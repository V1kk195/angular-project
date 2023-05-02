import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course';
import { CoursesService } from '../../core/courses.service';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    public courses: Course[] = [];

    constructor(private coursesService: CoursesService) {}

    public ngOnInit(): void {
        this.getCourses();
    }

    private getCourses(): void {
        this.courses = this.coursesService.getCourses();
    }

    public onLoadMoreClick(): void {
        console.log('Load more courses clicked');
    }

    public onDeleteCourse(courseId: string): void {
        console.log(`Deleted course ${courseId}`);
        const res = confirm('Do you really want to delete this course?');

        if (res) {
            this.coursesService.deleteCourse(courseId);
        }
    }

    public courseTrackBy(index: number, course: Course): string {
        return course.id;
    }
}
