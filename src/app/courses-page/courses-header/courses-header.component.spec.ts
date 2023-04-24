import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHeaderComponent } from './courses-header.component';
import { FormsModule } from '@angular/forms';

describe('CoursesHeaderComponent', () => {
    let component: CoursesHeaderComponent;
    let fixture: ComponentFixture<CoursesHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CoursesHeaderComponent],
            imports: [FormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(CoursesHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should search for query on input text', () => {
        const componentElem = fixture.nativeElement;
        const input: HTMLInputElement = componentElem.querySelector('input');
        const searchButton: HTMLButtonElement =
            componentElem.querySelector('.search-button');
        const consoleSpy = spyOn(console, 'log');

        input.value = 'video 2';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(component.searchValue).toBe('video 2');

        searchButton.click();

        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    it('should call #onAddCourseClick() on Add Course button click', () => {
        const componentElem = fixture.nativeElement;
        const button: HTMLButtonElement =
            componentElem.querySelector('.add-course-button');
        const consoleSpy = spyOn(console, 'log');

        button.click();

        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });
});
