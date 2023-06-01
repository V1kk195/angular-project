import { NgModule } from '@angular/core';

import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginPageComponent],
    imports: [SharedModule, FormsModule],
    exports: [LoginPageComponent],
})
export class LoginPageModule {}
