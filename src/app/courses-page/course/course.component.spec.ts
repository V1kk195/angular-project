import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { courses } from '../mock-courses';
import { Course } from './course';
import { first } from 'rxjs';
import { CoursesListComponent } from '../courses-list/courses-list.component';

//  standalone test
describe('CourseComponent', () => {
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CourseComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show course info', () => {
        const courseElement = fixture.nativeElement;
        component.course = courses[0];

        fixture.detectChanges();

        expect(courseElement.textContent).toContain(courses[0].title);
        expect(courseElement.textContent).toContain(
            `${courses[0].duration} min`
        );
        expect(courseElement.textContent).toContain(courses[0].creationDate);
        expect(courseElement.textContent).toContain(courses[0].description);
    });

    it('should edit course info on click edit button', () => {
        const courseElement = fixture.nativeElement;
        const button: HTMLButtonElement =
            courseElement.querySelectorAll('button')[0];
        const editFuncSpy = spyOn(component, 'onEdit');

        button.click();

        expect(editFuncSpy).toHaveBeenCalledTimes(1);
    });

    it('should call onDelete func on click delete button', () => {
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
            declarations: [CoursesListComponent, CourseComponent],
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
