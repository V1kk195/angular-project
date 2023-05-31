import { Course, CourseApiModel } from '../../types/course';

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
