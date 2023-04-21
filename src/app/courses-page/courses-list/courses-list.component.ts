import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course';
import { courses } from './mock-courses';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    public courses?: Course[];

    public ngOnInit(): void {
        this.courses = courses;
    }

    public onLoadMoreClick(): void {
        console.log('Load more courses clicked');
    }

    public onDeleteCourse(courseId: string): void {
        console.log(`Deleted course ${courseId}`);
    }
}
