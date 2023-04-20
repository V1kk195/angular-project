import { Component } from '@angular/core';

@Component({
    selector: 'app-courses-header',
    templateUrl: './courses-header.component.html',
    styleUrls: ['./courses-header.component.scss'],
})
export class CoursesHeaderComponent {
    public searchValue?: string;
    public onSearch(): void {
        console.log(`Searching for ${this.searchValue}`);
    }
}
