import { CourseBorderDirective } from './course-border.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <div [appCourseBorder]="currentDate"></div>
        <div [appCourseBorder]="currentDate"></div>
        <div [appCourseBorder]="futureDate"></div>
        <div [appCourseBorder]="oldDate"></div>
    `,
})
class TestComponent {
    currentDate = new Date().getTime() - 86400000;
    oldDate = new Date(2021, 5, 20).getTime();
    futureDate = new Date(2024, 5, 20).getTime();
}

describe('CourseBorderDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let elemsWithDirective: DebugElement[];

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [CourseBorderDirective, TestComponent],
        }).createComponent(TestComponent);

        fixture.detectChanges();

        elemsWithDirective = fixture.debugElement.queryAll(
            By.directive(CourseBorderDirective)
        );
    });

    it('should create an instance', () => {
        const directive = new CourseBorderDirective(fixture);
        expect(directive).toBeTruthy();
    });

    it('should have 4 elements with directive', () => {
        expect(elemsWithDirective.length).toBe(4);
    });

    it('should not apply border to old courses (4)', () => {
        const border = elemsWithDirective[3].nativeElement.style.border;

        expect(border).toBeFalsy();
    });

    it('should apply green border to new courses (1, 2)', () => {
        const borderColor =
            elemsWithDirective[0].nativeElement.style.borderColor;

        expect(borderColor).withContext('changed border').toBe('green');
        expect(elemsWithDirective[1].nativeElement.style.borderColor)
            .withContext('changed border')
            .toBe('green');
    });

    it('should apply blue border to future courses (3)', () => {
        const borderColor =
            elemsWithDirective[2].nativeElement.style.borderColor;

        expect(borderColor).withContext('changed border').toBe('blue');
    });
});
