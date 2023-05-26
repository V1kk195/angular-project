import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';

type BreadcrumbsItems = { caption: string; url: string }[];

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
        url = '',
        breadcrumbs: BreadcrumbsItems = []
    ): BreadcrumbsItems {
        const child = route.firstChild;

        if (!child) {
            return breadcrumbs;
        } else {
            const breadcrumbData = child.snapshot.data?.['breadcrumbs'];
            const courseData = child.snapshot.data?.['course'];

            const routeURL: string = child.snapshot.url
                .map((segment) => segment.path)
                .join('/');

            if (routeURL) {
                url += `/${routeURL}`;
            }

            if (breadcrumbData) {
                breadcrumbs.push({
                    caption: courseData
                        ? courseData?.title
                        : breadcrumbData?.caption,
                    url,
                });
            }

            return this.createBreadcrumb(child, url, breadcrumbs);
        }
    }
}
