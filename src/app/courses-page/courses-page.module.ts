import { NgModule } from '@angular/core';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { CourseBorderDirective } from './course/course-border.directive';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './add-course/add-course.component';

import { RouterLink, RouterOutlet } from '@angular/router';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddEditCourseFormComponent } from './add-edit-course-form/add-edit-course-form.component';
import { DurationFieldComponent } from './add-edit-course-form/duration-field/duration-field.component';
import { AuthorsFieldComponent } from './add-edit-course-form/authors-field/authors-field.component';
import { DateFieldComponent } from './add-edit-course-form/date-field/date-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';
import { TranslateModule } from '@ngx-translate/core';

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
        EditCourseComponent,
        AddEditCourseFormComponent,
    ],
    imports: [
        SharedModule,
        RouterLink,
        RouterOutlet,
        ReactiveFormsModule,
        CoursesRoutingModule,
        TranslateModule.forChild(),
    ],
    exports: [CoursesPageComponent, CoursesListComponent],
})
export class CoursesPageModule {}
