import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    Subject,
    tap,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { ROUTES_NAMES } from '../../core/constants';
import { CoursesService } from '../../core/courses-services/courses.service';
import { CoursesActions } from 'src/app/state/courses';

@Component({
    selector: 'app-courses-header',
    templateUrl: './courses-header.component.html',
    styleUrls: ['./courses-header.component.scss'],
})
export class CoursesHeaderComponent implements OnInit, OnDestroy {
    public addCourseLink = `/${ROUTES_NAMES.addCourse}`;
    private subject$: Subject<Event> = new Subject();
    private componentIsDestroyed = false;

    constructor(
        private coursesService: CoursesService,
        private store: Store,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    public ngOnInit() {
        this.handleSearch();
    }

    public ngOnDestroy() {
        this.componentIsDestroyed = true;
    }

    private handleSearch(): void {
        // const input = document.getElementById('searchInput')!;
        //
        // fromEvent(input, 'keyup')
        //     .pipe(
        //         map((e) => (e?.target as HTMLInputElement).value),
        //         debounceTime(500),
        //         distinctUntilChanged(),
        //         throttleTime(250),
        //         switchMap((search) => this.coursesService.searchCourses(search))
        //     )
        //     .subscribe((data) => this.subject$.next(data));
        //
        // this.subject$.subscribe((data) => {
        //     console.log(data);
        // });

        this.subject$
            .pipe(
                map((e) => (e?.target as HTMLInputElement).value),
                filter((value) => value === '' || value.length > 2),
                tap((data) => this.updateUrl(data)),
                distinctUntilChanged(),
                debounceTime(250)
            )
            .subscribe((data) => {
                this.store.dispatch(CoursesActions.loadCourses({}));
            });
    }

    public updateUrl(searchValue: string): void {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                search: searchValue,
            },
            queryParamsHandling: 'merge',
            replaceUrl: false,
        });
    }

    public onSearchInputChange(event: Event): void {
        this.subject$.next(event);
    }

    public onAddCourseClick(): void {
        console.log(`Add Course Clicked`);
    }
}
