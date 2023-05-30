import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateFieldComponent {
    @Input() date = '';
}
