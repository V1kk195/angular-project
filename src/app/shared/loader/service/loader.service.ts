import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    private loaderVisible = false;

    public setIsLoading(value: boolean) {
        this.loaderVisible = value;
    }

    public get isLoading() {
        return this.loaderVisible;
    }
}
