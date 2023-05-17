import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(
        value: Record<string, any>[] = [],
        property: string,
        direction: 'asc' | 'desc' = 'desc'
    ): any[] {
        return [...value].sort((a, b) => {
            if (direction === 'asc') {
                return a[property] - b[property];
            }

            return b[property] - a[property];
        });
    }
}
