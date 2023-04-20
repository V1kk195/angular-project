import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [CoursesListComponent, CourseComponent, CoursesPageComponent],
    imports: [CommonModule, CoreModule],
    exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
