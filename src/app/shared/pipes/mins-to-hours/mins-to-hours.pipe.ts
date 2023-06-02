import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';

@Pipe({
    name: 'minsToHours',
})
export class MinsToHoursPipe implements PipeTransform {
    private hours = '';
    private mins = '';

    constructor(private translate: TranslateService) {}

    public transform(value: string | number = '', updated?: any): string {
        if (value) {
            const hours = Math.trunc(+value / 60);
            const mins = +value % 60;

            this.hours = this.translate.instant(
                'COURSES_PAGE.COURSE.TIME.HOURS'
            );
            this.mins = this.translate.instant(
                'COURSES_PAGE.COURSE.TIME.MINUTES'
            );

            return (
                (hours >= 1 ? `${hours}${this.hours} ` : '') +
                (mins ? `${mins}${this.mins}` : '')
            );
        }

        return '';
    }
}
