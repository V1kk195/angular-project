import { Course, CourseApiModel } from '../../types/course';
import { DatePipe } from '@angular/common';

export const transformCourseFromApiModel = (item: CourseApiModel): Course => {
    return {
        id: item.id?.toString() || '',
        title: item.name,
        creationDate: item.date,
        duration: item.length,
        description: item.description,
        topRated: item.isTopRated,
        authors: item.authors,
    };
};

export const transformCourseToApiModel = (item: Course): CourseApiModel => {
    return {
        id: Number(item.id),
        authors: '',
        date: item.creationDate,
        description: item.description,
        isTopRated: item?.topRated || false,
        length: item.duration,
        name: item.title,
    };
};

export const formatDate = (value: string): string => {
    return new DatePipe('en-US').transform(value, 'yyyy-MM-dd') || '';
};

export const formatDateToISO = (value: string): string => {
    return new Date(value).toISOString();
};
