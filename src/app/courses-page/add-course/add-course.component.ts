import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CourseApiModel } from '../../types/course';
import { CoursesService } from '../../core/courses-services/courses.service';
import { ROUTES_NAMES } from '../../core/constants';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnDestroy {
    private subs?: Subscription;

    constructor(
        private coursesService: CoursesService,
        private router: Router
    ) {}
    public onSave(course: CourseApiModel): void {
        const sub = this.coursesService
            .createCourse(course)
            .subscribe((data) => {
                this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`);
            });

        this.subs = sub;
    }

    public ngOnDestroy() {
        this.subs?.unsubscribe();
    }
}
