import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { courses } from '../mock-courses';
import { Course } from './course';
import { first } from 'rxjs';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { CourseBorderDirective } from './course-border.directive';
import { DatePipe } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MockBuilder, MockRender } from 'ng-mocks';
import { CoursesPageModule } from '../courses-page.module';

//  standalone test
describe('CourseComponent', () => {
    beforeEach(() => MockBuilder(CourseComponent, CoursesPageModule));

    it('should create', () => {
        const fixture = MockRender(CourseComponent);
        const component = fixture.componentInstance;

        expect(component).toBeTruthy();
    });

    it('should show course info', () => {
        const fixture = MockRender(CourseComponent, { course: courses[0] });
        const courseElement = fixture.nativeElement;

        fixture.detectChanges();

        expect(courseElement.textContent).toContain('Video Course 1');
        // expect(courseElement.textContent).toContain('2h 40min');
        expect(courseElement.textContent).toContain(
            new DatePipe('en-US').transform(
                courses[0].creationDate,
                'MM/dd/yyyy'
            )
        );
        expect(courseElement.textContent).toContain(courses[0].description);
    });

    it('should edit course info on click edit button', () => {
        const fixture = MockRender(CourseComponent);
        const component = fixture.componentInstance;
        const courseElement = fixture.nativeElement;
        const button: HTMLButtonElement =
            courseElement.querySelectorAll('button')[0];
        const editFuncSpy = spyOn(component, 'onEdit');

        button.click();

        expect(editFuncSpy).toHaveBeenCalledTimes(1);
    });

    it('should call onDelete func on click delete button', () => {
        const fixture = MockRender(CourseComponent);
        const component = fixture.componentInstance;
        const courseElement = fixture.nativeElement;
        const button: HTMLButtonElement =
            courseElement.querySelectorAll('button')[1];
        const deleteFuncSpy = spyOn(component, 'onDelete');

        button.click();

        expect(deleteFuncSpy).toHaveBeenCalledTimes(1);
    });
});

// test as a class
describe('CourseComponent as a class', () => {
    it('#onEdit() should apply changes to course', () => {
        const component = new CourseComponent();
        const consoleSpy = spyOn(console, 'log');

        component.onEdit();

        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    it('should raise the courseDeleted event after clicking delete button', () => {
        const component = new CourseComponent();
        const course: Course = courses[0];
        component.course = course;

        component.courseDeleted
            .pipe(first())
            .subscribe((courseId: string) => expect(courseId).toBe(course.id));

        component.onDelete();
    });
});

// test host component
describe('CourseComponent in host CoursesListComponent', () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                CoursesListComponent,
                CourseComponent,
                CourseBorderDirective,
            ],
            imports: [SharedModule],
        }).compileComponents();

        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should raise courseDeleted event when clicked Delete button', () => {
        const courseElement = fixture.nativeElement;
        const button: HTMLButtonElement =
            courseElement.querySelector('.delete-button');
        const deleteFunction = spyOn(component, 'onDeleteCourse');

        button.click();

        expect(deleteFunction).toHaveBeenCalledTimes(1);
    });
});
