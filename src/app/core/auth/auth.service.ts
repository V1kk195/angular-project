import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CurrentUserResponse, LoginRequest, LoginResponse } from '../../types';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = BASE_URL;
    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) {}

    public logIn({ login, password }: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, {
            login,
            password,
        } as LoginRequest);
    }

    public logOut(): void {
        localStorage.removeItem('token');
    }

    public get isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    public getUserInfo(): Observable<CurrentUserResponse> {
        return this.http.post<CurrentUserResponse>(
            `${this.baseUrl}/auth/userinfo`,
            { token: this.cookieService.get('token') }
        );
    }

    public getAuthorizationToken(): string {
        return localStorage.getItem('token') || '';
    }
}
