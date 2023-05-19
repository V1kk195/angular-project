import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const DAY_IN_MLSEC = 86400000;

@Directive({
    selector: '[appCourseBorder]',
})
export class CourseBorderDirective implements OnInit {
    @Input() appCourseBorder = '';
    private creationDate = 0;
    private currentDate = new Date().getTime();

    constructor(private el: ElementRef) {}

    private checkIsFresh(): boolean {
        return (
            this.creationDate < this.currentDate &&
            this.creationDate >= this.currentDate - DAY_IN_MLSEC * 14
        );
    }

    ngOnInit() {
        this.creationDate = new Date(this.appCourseBorder).getTime();
        if (this.checkIsFresh()) {
            this.el.nativeElement.style.border = '1px solid green';
        } else if (this.creationDate > this.currentDate) {
            this.el.nativeElement.style.border = '1px solid blue';
        }
    }
}
