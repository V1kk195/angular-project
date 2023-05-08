import { NgModule } from '@angular/core';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { CourseBorderDirective } from './course/course-border.directive';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { DurationFieldComponent } from './add-course/duration-field/duration-field.component';
import { DateFieldComponent } from './add-course/date-field/date-field.component';
import { AuthorsFieldComponent } from './add-course/authors-field/authors-field.component';

@NgModule({
    declarations: [
        CoursesListComponent,
        CourseComponent,
        CoursesPageComponent,
        CoursesHeaderComponent,
        CourseBorderDirective,
        AddCourseComponent,
        DurationFieldComponent,
        DateFieldComponent,
        AuthorsFieldComponent,
    ],
    imports: [SharedModule],
    exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
