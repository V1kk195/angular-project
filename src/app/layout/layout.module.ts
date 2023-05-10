import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [SharedModule, RouterLink],
    exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
