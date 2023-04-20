import { Component } from '@angular/core';
import { Course } from '../course/course';
import { courses } from './mock-courses';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
    public courses: Course[] = courses;
}
