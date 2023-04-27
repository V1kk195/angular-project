import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { CourseBorderDirective } from './course/course-border.directive';
import { SharedModule } from '../shared/shared.module';

describe('CoursesPageComponent', () => {
    let component: CoursesPageComponent;
    let fixture: ComponentFixture<CoursesPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CoursesPageComponent,
                CoursesHeaderComponent,
                CoursesListComponent,
                CourseComponent,
                CourseBorderDirective,
            ],
            imports: [FormsModule, SharedModule],
        }).compileComponents();

        fixture = TestBed.createComponent(CoursesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
