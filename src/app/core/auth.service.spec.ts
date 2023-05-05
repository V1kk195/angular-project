import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should log in', () => {
        const spy = spyOn(console, 'log');

        service.logIn({ email: 'test@mail.com', password: '123' });

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should log out', () => {
        const spy = spyOn(console, 'log');

        service.logOut();

        expect(spy).toHaveBeenCalledTimes(1);
    });
});
