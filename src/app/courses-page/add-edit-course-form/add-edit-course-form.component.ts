import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { ROUTES_NAMES } from '../../core/constants';
import { Course, CourseApiModel } from '../../types/course';

export interface FormData {
    title: string;
    description: string;
    duration: number;
    date: string;
    authors: string;
}

@Component({
    selector: 'app-add-edit-course-form',
    templateUrl: './add-edit-course-form.component.html',
    styleUrls: ['./add-edit-course-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddEditCourseFormComponent implements OnInit, OnChanges {
    @Input() type: 'add' | 'edit' = 'add';
    @Input() courseInfo?: Course;
    @Output() saveEvent = new EventEmitter<CourseApiModel>();

    public heading = '';

    public form = this.fb.nonNullable.group({
        title: ['', [Validators.required, Validators.maxLength(50)]],
        description: ['', [Validators.required, Validators.maxLength(500)]],
        duration: [null, Validators.required],
        creationDate: ['', Validators.required],
        authors: ['', Validators.required],
    });

    public errorMessages = {
        required: 'This field is required',
        maxlength: (max: number) => `Maximum length should be ${max}`,
    };

    constructor(private router: Router, private fb: FormBuilder) {}

    public get f() {
        return this.form.controls;
    }

    public ngOnInit() {
        this.heading = this.type === 'add' ? 'New course' : 'Edit course';
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes['courseInfo']) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.form.patchValue(this.courseInfo);
        }
    }

    public onCancel(): void {
        this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`);
    }

    public onSave(): void {
        const formData = this.form.getRawValue();

        const courseData: CourseApiModel = {
            name: formData.title,
            description: formData.description,
            authors: formData.authors,
            isTopRated: false,
            date: formData.creationDate,
            length: formData.duration!,
        };

        this.saveEvent.emit(courseData);
    }
}
