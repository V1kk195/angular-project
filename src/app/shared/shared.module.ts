import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { MinsToHoursPipe } from './pipes/mins-to-hours.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        SearchComponent,
        MinsToHoursPipe,
        OrderByPipe,
        FilterPipe,
    ],
    imports: [CommonModule, FormsModule],
    exports: [
        CommonModule,
        FormsModule,
        BreadcrumbsComponent,
        MinsToHoursPipe,
        OrderByPipe,
    ],
})
export class SharedModule {}
