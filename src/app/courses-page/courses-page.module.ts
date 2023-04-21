import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoursesListComponent } from './courses-list/courses-list.component'
import { CourseComponent } from './course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
    declarations: [CoursesListComponent, CourseComponent, CoursesPageComponent, HeaderComponent],
    imports: [CommonModule],
    exports: [
        CoursesPageComponent
    ]
})
export class CoursesPageModule {}
