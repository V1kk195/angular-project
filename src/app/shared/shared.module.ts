import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { MinsToHoursPipe } from './pipes/mins-to-hours.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        SearchComponent,
        MinsToHoursPipe,
        OrderByPipe,
        FilterPipe,
    ],
    imports: [CommonModule],
    exports: [BreadcrumbsComponent, MinsToHoursPipe, OrderByPipe],
})
export class SharedModule {}
