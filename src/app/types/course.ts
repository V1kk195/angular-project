export interface Course {
    id: string;
    title: string;
    creationDate: number;
    duration: number;
    description: string;
    topRated: boolean;
}

export type Author = {
    id: number;
    name: string;
};

export type CourseApiModel = {
    id?: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: Author[];
    isTopRated: boolean;
};
