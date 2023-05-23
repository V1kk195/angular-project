import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';

type BreadcrumbsItems = string[];

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
    public navEnd: Observable<NavigationEnd>;
    public items: BreadcrumbsItems = [];

    constructor(private router: Router, private route: ActivatedRoute) {
        this.navEnd = router.events.pipe(
            filter((event) => event instanceof NavigationEnd)
        ) as Observable<NavigationEnd>;
    }

    public ngOnInit() {
        this.navEnd.subscribe(() => {
            this.items = this.createBreadcrumb(this.route);
        });
    }

    private createBreadcrumb(
        route: ActivatedRoute,
        breadcrumbs: BreadcrumbsItems = []
    ): BreadcrumbsItems {
        const children = route.children;

        console.log('children', children);

        if (children.length === 0) {
            return breadcrumbs;
        }

        const child = children[0];
        const breadcrumbData = child.snapshot.data?.['breadcrumbs'];

        if (breadcrumbData) {
            breadcrumbs.push(breadcrumbData?.caption);
        }

        return this.createBreadcrumb(child, breadcrumbs);
    }
}
