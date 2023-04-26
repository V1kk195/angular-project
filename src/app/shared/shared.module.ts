import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { MinsToHoursPipe } from './pipes/mins-to-hours.pipe';

@NgModule({
    declarations: [BreadcrumbsComponent, SearchComponent, MinsToHoursPipe],
    imports: [CommonModule],
    exports: [BreadcrumbsComponent, MinsToHoursPipe],
})
export class SharedModule {}
