export interface Course {
    id: string;
    title: string;
    creationDate: number;
    duration: number;
    description: string;
    topRated: boolean;
}

export type CourseResponse = {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: {
        id: number;
        name: string;
    };
    isTopRated: boolean;
};
