import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
    @Input() course?: Course;
    @Output() courseDeleted = new EventEmitter<string>();

    public onEdit(): void {
        console.log('Clicked edit button');
    }

    public onDelete(): void {
        this.courseDeleted.emit(this.course?.id);
    }
}
