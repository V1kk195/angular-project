import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course/course';
import { courses } from '../mock-courses';
import { ROUTES_NAMES } from '../../core/routes';

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

    public onSave(courseInfo: string) {
        console.log('info updated', courseInfo);
        this.router.navigateByUrl(`/${ROUTES_NAMES.courses}`);
    }
}
