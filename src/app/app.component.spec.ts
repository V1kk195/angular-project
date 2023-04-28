import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CoursesHeaderComponent } from './courses-page/courses-header/courses-header.component';
import { CoursesListComponent } from './courses-page/courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './courses-page/course/course.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule],
            declarations: [
                AppComponent,
                HeaderComponent,
                BreadcrumbsComponent,
                CoursesPageComponent,
                FooterComponent,
                CoursesHeaderComponent,
                CoursesListComponent,
                CourseComponent,
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'video-course-portal'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('video-course-portal');
    });
});
