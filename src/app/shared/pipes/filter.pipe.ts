import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(
        value: Record<string, any>[],
        query: string,
        property: string
    ): any[] {
        return value.filter((item) =>
            item[property].toLowerCase().includes(query.toLowerCase())
        );
    }
}
