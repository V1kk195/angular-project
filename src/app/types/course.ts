export interface Course {
    id: string;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    topRated: boolean;
    authors: Author[];
}

export type Author = {
    id: number;
    name: string;
};

export type CourseApiModel = {
    id?: number;
    name: string;
    // date is in ISO format
    date: string;
    length: number;
    description: string;
    authors: Author[];
    isTopRated: boolean;
};
