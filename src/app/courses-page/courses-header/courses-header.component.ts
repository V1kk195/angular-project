import { Component } from '@angular/core';
import { ROUTES_NAMES } from '../../core/constants/routes';

@Component({
    selector: 'app-courses-header',
    templateUrl: './courses-header.component.html',
    styleUrls: ['./courses-header.component.scss'],
})
export class CoursesHeaderComponent {
    public searchValue = '';
    public addCourseLink = `/${ROUTES_NAMES.addCourse}`;

    public onSearch(): void {
        console.log(`Searching for ${this.searchValue}`);
    }

    public onAddCourseClick(): void {
        console.log(`Add Course Clicked`);
    }
}
