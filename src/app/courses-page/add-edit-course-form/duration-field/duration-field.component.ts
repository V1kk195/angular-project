import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationFieldComponent implements OnInit {
    @Input() form?: FormGroup;
    @Input() controlName = '';

    constructor(private ref: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.form
            ?.get(this.controlName)
            ?.valueChanges.pipe(take(1))
            .subscribe(() => {
                this.ref.markForCheck();
            });
    }
}
