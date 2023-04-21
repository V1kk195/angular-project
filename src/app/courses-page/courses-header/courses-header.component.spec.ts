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
});
