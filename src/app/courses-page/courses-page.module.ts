import { NgModule } from '@angular/core';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { CourseBorderDirective } from './course/course-border.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CoursesListComponent,
        CourseComponent,
        CoursesPageComponent,
        CoursesHeaderComponent,
        CourseBorderDirective,
    ],
    imports: [SharedModule],
    exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
