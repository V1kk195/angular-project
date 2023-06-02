import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, take } from 'rxjs';

import { Author } from '../../../types/course';
import { CoursesService } from '../../../core/courses-services/courses.service';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsFieldComponent implements OnInit {
    @Input() form?: FormGroup;
    @Input() controlName = '';

    public authors$?: Observable<Author[]>;
    public chosenAuthors: Author[] = [];
    public value?: string;

    constructor(
        private courseService: CoursesService,
        private ref: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.form
            ?.get(this.controlName)
            ?.valueChanges.pipe(take(1))
            .subscribe((data: Author[]) => {
                this.chosenAuthors = data;
                this.ref.markForCheck();
            });
    }

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
        this.form?.patchValue({ authors: this.chosenAuthors });
    }
}
