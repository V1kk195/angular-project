import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCourseFormComponent } from './add-edit-course-form.component';

describe('AddCourseComponent', () => {
    let component: AddEditCourseFormComponent;
    let fixture: ComponentFixture<AddEditCourseFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddEditCourseFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AddEditCourseFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
