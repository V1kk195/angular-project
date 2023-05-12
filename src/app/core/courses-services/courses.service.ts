import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Course, CourseApiModel } from '../../types/course';
import { courses } from '../../courses-page/mock-courses';
import { BASE_URL } from '../constants';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    private courses: Course[] = courses;
    private baseUrl = BASE_URL;

    constructor(private http: HttpClient) {}

    public getCourses(
        start = 0,
        count = 5,
        sort = 'date'
    ): Observable<Course[]> {
        return this.http
            .get<CourseApiModel[]>(
                `${this.baseUrl}/courses?start=${start}&count=${count}&sort=${sort}`
            )
            .pipe(
                map((data) =>
                    data.map(
                        (item) =>
                            ({
                                id: item.id?.toString(),
                                title: item.name,
                                creationDate: new Date(item.date).getTime(),
                                duration: item.length,
                                description: item.description,
                                topRated: item.isTopRated,
                            } as Course)
                    )
                )
            );
    }

    public createCourse(data: CourseApiModel): Observable<CourseApiModel> {
        return this.http.post<CourseApiModel>(`${this.baseUrl}/courses`, data);
        // this.courses = [...this.courses, data];
        //
        // return data;
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

    public deleteCourse(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/courses/${id}`);
    }
}
