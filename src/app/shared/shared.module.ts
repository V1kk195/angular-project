import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { MinsToHoursPipe } from './pipes/mins-to-hours/mins-to-hours.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter-list/filter.pipe';
import { IfAuthenticatedDirective } from './ifAuthenticated/if-authenticated.directive';
import { LoaderComponent } from './loader/loader.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        SearchComponent,
        MinsToHoursPipe,
        OrderByPipe,
        FilterPipe,
        IfAuthenticatedDirective,
        LoaderComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AngularSvgIconModule,
        RouterLink,
        TranslateModule.forChild(),
    ],
    exports: [
        CommonModule,
        FormsModule,
        BreadcrumbsComponent,
        MinsToHoursPipe,
        OrderByPipe,
        IfAuthenticatedDirective,
        LoaderComponent,
        TranslateModule,
    ],
})
export class SharedModule {}
