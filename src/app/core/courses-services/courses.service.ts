import { Injectable } from '@angular/core';
import { Course } from '../../courses-page/course/course';
import { courses } from '../../courses-page/mock-courses';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    private courses: Course[] = courses;

    public getCourses(): Course[] {
        return this.courses;
    }

    public createCourse(data: Course): Course {
        this.courses = [...this.courses, data];

        return data;
    }

    public getCourseById(id: string): Course | null {
        return this.courses.find((item) => item.id === id) || null;
    }

    public updateCourse(data: Course): Course {
        this.courses = this.courses.map((item) => {
            if (item.id === data.id) {
                return data;
            }

            return item;
        });

        return data;
    }

    public deleteCourse(id: string): void {
        this.courses = this.courses.filter((item) => item.id !== id);
    }
}
