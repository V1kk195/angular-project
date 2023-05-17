import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CourseApiModel } from '../../types/course';
import { courses } from '../mock-courses';
import { ROUTES_NAMES } from '../../core/constants';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
    private courseId?: string;
    public courseInfo?: Course;

    constructor(private route: ActivatedRoute, private router: Router) {}

    public ngOnInit() {
        this.courseId = this.route.snapshot.paramMap.get('id') || '';

        if (this.courseId) {
            this.courseInfo = courses.find((item) => item.id === this.courseId);
        }
    }

    public onSave(courseInfo: CourseApiModel) {
        console.log('info updated', courseInfo);
        this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`);
    }
}
