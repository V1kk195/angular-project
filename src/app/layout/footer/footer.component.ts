import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    @Input() languages: string[] = [];

    constructor(private translate: TranslateService) {}

    public onSelectLanguage(event: Event) {
        this.translate.use((event.target as HTMLSelectElement).value);
    }
}
