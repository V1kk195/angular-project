import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoreModule } from '../core/core.module';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { FormsModule } from '@angular/forms';
import { CourseBorderDirective } from './course/course-border.directive';

@NgModule({
    declarations: [
        CoursesListComponent,
        CourseComponent,
        CoursesPageComponent,
        CoursesHeaderComponent,
        CourseBorderDirective,
    ],
    imports: [CommonModule, CoreModule, FormsModule],
    exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
