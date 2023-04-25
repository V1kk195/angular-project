import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CourseComponent } from '../course/course.component';
import { courses } from '../mock-courses';

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

    it('should show list of courses', () => {
        const componentEl: HTMLElement = fixture.nativeElement;
        const listElements = componentEl.querySelectorAll('li');

        expect(listElements).toHaveSize(courses.length);
    });

    it('should have working button "Load more"', () => {
        const componentEl: HTMLElement = fixture.nativeElement;
        const buttonEl: HTMLButtonElement | null =
            componentEl.querySelector('.load-button');
        const consoleSpy = spyOn(console, 'log');

        expect(buttonEl?.textContent).toEqual('Load more');

        buttonEl?.click();

        expect(consoleSpy).toHaveBeenCalled();
    });

    it('should delete course on click Delete button', function () {
        const componentEl: HTMLElement = fixture.nativeElement;
        const buttonEl: HTMLButtonElement | null =
            componentEl.querySelector('.delete-button');
        const consoleSpy = spyOn(console, 'log');

        buttonEl?.click();

        expect(consoleSpy).toHaveBeenCalled();
    });
});
