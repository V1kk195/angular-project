import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_NAMES } from '../../core/constants';
import { Author, CourseApiModel } from '../../types/course';

@Component({
    selector: 'app-add-edit-course-form',
    templateUrl: './add-edit-course-form.component.html',
    styleUrls: ['./add-edit-course-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddEditCourseFormComponent implements OnInit {
    @Input() type: 'add' | 'edit' = 'add';
    @Input() title = '';
    @Input() description = '';
    @Input() duration = 0;
    @Input() date = new Date().toISOString();
    @Input() authors: Author[] = [];

    @Output() saveEvent = new EventEmitter<CourseApiModel>();

    public heading = '';

    constructor(private router: Router) {}

    public ngOnInit() {
        this.heading = this.type === 'add' ? 'New course' : 'Edit course';
    }

    public onCancel(): void {
        console.log('cancelled adding course');
        this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`);
    }

    public onSave(): void {
        const courseData: CourseApiModel = {
            name: this.title,
            description: this.description,
            authors: this.authors,
            isTopRated: false,
            date: this.date,
            length: this.duration,
        };
        console.log('added course', courseData);
        this.saveEvent.emit(courseData);
    }
}
