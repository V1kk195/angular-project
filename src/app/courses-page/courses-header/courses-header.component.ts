import { Component, OnInit } from '@angular/core';

import { ROUTES_NAMES } from '../../core/constants';
import { CoursesService } from '../../core/courses-services/courses.service';
import {
    debounceTime,
    distinctUntilChanged,
    fromEvent,
    map,
    Subject,
    switchMap,
    throttleTime,
} from 'rxjs';

@Component({
    selector: 'app-courses-header',
    templateUrl: './courses-header.component.html',
    styleUrls: ['./courses-header.component.scss'],
})
export class CoursesHeaderComponent implements OnInit {
    public addCourseLink = `/${ROUTES_NAMES.addCourse}`;
    private subject$ = new Subject();

    constructor(private coursesService: CoursesService) {}

    public ngOnInit() {
        this.handleSearch();
    }

    private handleSearch() {
        const input = document.getElementById('searchInput')!;

        fromEvent(input, 'keyup')
            .pipe(
                map((e) => (e?.target as HTMLInputElement).value),
                debounceTime(500),
                distinctUntilChanged(),
                throttleTime(250),
                switchMap((search) => this.coursesService.searchCourses(search))
            )
            .subscribe((data) => this.subject$.next(data));

        this.subject$.subscribe((data) => {
            console.log(data);
        });
    }

    public onAddCourseClick(): void {
        console.log(`Add Course Clicked`);
    }
}
