import {
    Directive,
    OnInit,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUser } from '../../state/auth/auth.selectors';
import { take } from 'rxjs';

@Directive({
    selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective implements OnInit {
    private hasView = false;
    private isAuth = false;
    private user$ = this.store.select(selectUser);

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private store: Store
    ) {}

    public ngOnInit() {
        this.user$.subscribe((user) => {
            this.isAuth = !!user;
            this.displayTemplate();
        });
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
