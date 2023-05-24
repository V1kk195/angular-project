import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, tap } from 'rxjs';

import { Course, CourseApiModel } from '../../types/course';
import { BASE_URL } from '../constants';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    private baseUrl = BASE_URL;
    private coursesList: Course[] = [];
    public get courses() {
        return this.coursesList;
    }

    constructor(private http: HttpClient) {}

    private transformData(data: CourseApiModel[]): Course[] {
        return data.map(
            (item): Course => ({
                id: item.id?.toString() || '',
                title: item.name,
                creationDate: item.date,
                duration: item.length,
                description: item.description,
                topRated: item.isTopRated,
            })
        );
    }

    public getCourses(
        start = 0,
        count = 5,
        sort = 'date',
        textFragment = ''
    ): Observable<Course[]> {
        return this.http
            .get<CourseApiModel[]>(
                `${this.baseUrl}/courses?start=${start}&count=${count}&sort=${sort}&textFragment=${textFragment}`
            )
            .pipe(
                delay(2000),
                map(this.transformData),
                tap((courses) => (this.coursesList = courses))
            );
    }

    public searchCourses(textFragment: string) {
        this.coursesList = [];

        return this.getCourses(undefined, undefined, undefined, textFragment);
    }

    public createCourse(data: CourseApiModel): Observable<CourseApiModel> {
        return this.http.post<CourseApiModel>(`${this.baseUrl}/courses`, data);
    }

    public getCourseById(id: string): Observable<Course> {
        return this.http
            .get<CourseApiModel>(`${this.baseUrl}/courses/${id}`)
            .pipe(map((course) => this.transformData([course])[0]));
    }

    public updateCourse(data: Course): Course {
        this.coursesList = this.coursesList.map((item) => {
            if (item.id === data.id) {
                return data;
            }

            return item;
        });

        return data;
    }

    public deleteCourse(id: string, count?: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/courses/${id}`).pipe(
            tap((data) => {
                this.coursesList = [];

                this.getCourses(0, count).subscribe();
            })
        );
    }
}
