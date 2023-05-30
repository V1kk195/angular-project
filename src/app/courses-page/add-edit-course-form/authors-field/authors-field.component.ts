import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Author } from '../../../types/course';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsFieldComponent {
    @Input() form?: FormGroup;
    @Input() controlName = '';
}
