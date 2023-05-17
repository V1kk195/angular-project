export interface User {
    id: string;
    firstName: string;
    lastName: string;
}

export type CurrentUserResponse = {
    id: number;
    token: string;
    name: {
        first: string;
        last: string;
    };
    login: string;
    password: string;
};
