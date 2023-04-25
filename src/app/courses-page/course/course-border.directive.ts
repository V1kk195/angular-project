import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appCourseBorder]',
})
export class CourseBorderDirective implements OnInit {
    @Input('appCourseBorder') creationDate = 0;
    private currentDate = new Date().getTime();

    constructor(private el: ElementRef) {}

    private checkIsFresh(): boolean {
        // 1 day = 86 400 000 millisec
        return (
            this.creationDate < this.currentDate &&
            this.creationDate >= this.currentDate - 86400000 * 14
        );
    }

    ngOnInit() {
        if (this.checkIsFresh()) {
            this.el.nativeElement.style.border = '1px solid green';
        } else if (this.creationDate > this.currentDate) {
            this.el.nativeElement.style.border = '1px solid blue';
        }
    }
}
