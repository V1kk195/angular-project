import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Directive({
    selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective {
    private hasView = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService
    ) {}

    @Input() appUnless() {
        const isAuth = this.authService.isAuthenticated;

        if (isAuth && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (!isAuth && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
