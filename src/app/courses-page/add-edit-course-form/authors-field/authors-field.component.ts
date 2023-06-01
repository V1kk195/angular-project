import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Author } from '../../../types/course';
import { FormGroup } from '@angular/forms';
import { CoursesService } from '../../../core/courses-services/courses.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsFieldComponent {
    @Input() form?: FormGroup;
    @Input() controlName = '';

    public authors$?: Observable<Author[]>;
    public chosenAuthors: Author[] = [];
    public value?: string;

    constructor(private courseService: CoursesService) {}

    public onInputChange(event: Event): void {
        this.authors$ = this.courseService.getAuthors(
            (event?.target as HTMLInputElement).value
        );
    }

    public onOptionClick(author: Author): void {
        if (!this.chosenAuthors.find((item) => item.id === author.id)) {
            this.chosenAuthors = [...this.chosenAuthors, author];
            this.value = '';
            this.form?.patchValue({ [this.controlName]: this.chosenAuthors });
        }
    }

    public onDeleteOption(author: Author): void {
        this.chosenAuthors = this.chosenAuthors.filter(
            (item) => item.id !== author.id
        );
    }
}
