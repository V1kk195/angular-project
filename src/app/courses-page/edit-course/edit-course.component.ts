import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Course, CourseApiModel } from '../../types/course';
import { CoursesService } from '../../core/courses-services/courses.service';
import { CoursesActions } from 'src/app/state/courses';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
    private courseId?: string;
    public courseInfo$?: Observable<Course>;

    constructor(
        private route: ActivatedRoute,
        private coursesService: CoursesService,
        private store: Store
    ) {}

    public ngOnInit() {
        this.courseId = this.route.snapshot.paramMap.get('id') || '';

        if (this.courseId) {
            this.courseInfo$ = this.coursesService.getCourseById(this.courseId);
        }
    }

    public onSave(course: CourseApiModel) {
        this.store.dispatch(
            CoursesActions.updateCourse({
                course: { ...course, id: Number(this.courseId) },
            })
        );
    }
}
