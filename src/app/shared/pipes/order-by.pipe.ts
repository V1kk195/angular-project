import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(value: Record<string, any>[] = [], property: string): any[] {
        return [...value].sort((a, b) => a[property] - b[property]);
    }
}
