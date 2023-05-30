import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationFieldComponent {
    @Input() form?: FormGroup;
    @Input() controlName = '';
}
