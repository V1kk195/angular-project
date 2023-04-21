import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CourseComponent } from '../course/course.component';

describe('CoursesListComponent', () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CoursesListComponent, CourseComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
