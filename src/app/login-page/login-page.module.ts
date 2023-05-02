import { NgModule } from '@angular/core';

import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [LoginPageComponent],
    imports: [SharedModule],
    exports: [LoginPageComponent],
})
export class LoginPageModule {}
