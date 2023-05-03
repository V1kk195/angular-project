import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective implements OnInit {
    private hasView = false;
    private isAuth = false;

    @Input() set appIfAuthenticated(condition: boolean) {
        this.isAuth = condition;
        this.displayTemplate();
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {}

    public ngOnInit() {
        this.displayTemplate();
    }

    private displayTemplate() {
        if (this.isAuth && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (!this.isAuth && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
