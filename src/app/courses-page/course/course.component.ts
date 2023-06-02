import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { Course } from '../../types/course';
import { ROUTES_NAMES } from '../../core/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
    @Input() course?: Course;
    @Output() courseDeleted = new EventEmitter<string>();

    public courseLink = `/${ROUTES_NAMES.courses}`;
    public langUpdated?: Record<any, any>;

    constructor(private translate: TranslateService) {}

    public ngOnInit() {
        this.translate.onLangChange.subscribe(() => {
            this.langUpdated = {};
        });
    }

    public onEdit(): void {
        console.log('Clicked edit button');
    }

    public onDelete(): void {
        this.courseDeleted.emit(this.course?.id);
    }
}
