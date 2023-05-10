import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsFieldComponent {
    @Input() authors = '';
}
