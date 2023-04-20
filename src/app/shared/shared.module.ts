import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [BreadcrumbsComponent, SearchComponent],
    imports: [CommonModule],
})
export class SharedModule {}
