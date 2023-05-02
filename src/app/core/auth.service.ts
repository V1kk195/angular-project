import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // constructor() {}

    public logIn(userInfo: { email: string; password: string }): void {
        localStorage.setItem('user', JSON.stringify(userInfo));
        localStorage.setItem('token', `${userInfo.email}-fake-token`);
        console.log('logged in successfully', userInfo);
    }

    public logOut(): void {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    public get isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    public getUserInfo(): string | null {
        const user = localStorage.getItem('user');

        if (user) {
            return JSON.parse(user).email;
        }

        return null;
    }
}
