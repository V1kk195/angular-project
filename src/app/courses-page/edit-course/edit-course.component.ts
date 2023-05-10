import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-course',
    templateUrl: './edit-course.component.html',
    styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
    private courseId?: number;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    }
}
