import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddCourseComponent {
    @Input() title = '';
    @Input() description = '';

    public onCancel(): void {
        console.log('cancelled adding course');
    }

    public onSave(): void {
        console.log('added course');
    }
}
