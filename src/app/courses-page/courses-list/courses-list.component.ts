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

    public ngOnInit() {
        this.courses = courses;
    }

    public onClick() {
        console.log('Load more courses clicked');
    }
}