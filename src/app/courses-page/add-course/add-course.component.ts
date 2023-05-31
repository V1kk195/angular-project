import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CourseApiModel } from '../../types/course';

import { Store } from '@ngrx/store';
import { CoursesActions } from 'src/app/state/courses';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseComponent {
    constructor(private store: Store) {}

    public onSave(course: CourseApiModel): void {
        this.store.dispatch(CoursesActions.createCourse({ course }));
    }
}
