import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateFieldComponent {
    @Input() form?: FormGroup;
    @Input() controlName = '';
}
