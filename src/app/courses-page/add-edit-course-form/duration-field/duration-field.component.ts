import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationFieldComponent {
    @Input() duration?: number;
}
