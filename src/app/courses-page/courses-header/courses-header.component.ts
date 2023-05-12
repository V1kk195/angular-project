import { Component } from '@angular/core';

import { ROUTES_NAMES } from '../../core/constants';
import { CoursesService } from '../../core/courses-services/courses.service';

@Component({
    selector: 'app-courses-header',
    templateUrl: './courses-header.component.html',
    styleUrls: ['./courses-header.component.scss'],
})
export class CoursesHeaderComponent {
    public searchValue = '';
    public addCourseLink = `/${ROUTES_NAMES.addCourse}`;

    constructor(private coursesService: CoursesService) {}

    public onSearch(): void {
        console.log(`Searching for ${this.searchValue}`);
        this.coursesService.searchCourses(this.searchValue).subscribe();
    }

    public onAddCourseClick(): void {
        console.log(`Add Course Clicked`);
    }
}
