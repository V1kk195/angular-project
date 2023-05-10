import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-add-edit-course-form',
    templateUrl: './add-edit-course-form.component.html',
    styleUrls: ['./add-edit-course-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddEditCourseFormComponent {
    @Input() type: 'add' | 'edit' = 'add';
    @Input() title = '';
    @Input() description = '';

    public heading = this.type === 'add' ? 'New course' : 'Edit course';

    public onCancel(): void {
        console.log('cancelled adding course');
    }

    public onSave(): void {
        console.log('added course');
    }
}
