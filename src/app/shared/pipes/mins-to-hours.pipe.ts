import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minsToHours',
})
export class MinsToHoursPipe implements PipeTransform {
    transform(value: string | number = ''): string {
        const hours = Math.trunc(+value / 60);
        const mins = +value % 60;

        return `${hours >= 1 ? `${hours}h ` : ''}${mins}min`;
    }
}
