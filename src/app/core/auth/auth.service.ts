import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginRequest, LoginResponse } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = 'http://localhost:3004';
    constructor(private http: HttpClient) {}

    public logIn(userInfo: {
        email: string;
        password: string;
    }): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, {
            login: userInfo.email,
            password: userInfo.password,
        } as LoginRequest);
    }

    public logOut(): void {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        console.log('logged out');
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
