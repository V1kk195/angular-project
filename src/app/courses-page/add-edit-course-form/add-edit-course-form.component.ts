import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

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

    public heading = '';

    public ngOnInit() {
        this.heading = this.type === 'add' ? 'New course' : 'Edit course';
    }

    public onCancel(): void {
        console.log('cancelled adding course');
    }

    public onSave(): void {
        console.log('added course');
    }
}
