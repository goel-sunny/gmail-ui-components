import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[actionEnable]'
})
export class ActionEnableDirective {

    constructor(private elem: ElementRef) {

    }
    @HostListener('mouseover')
    onMouseOver() {
        this.elem.nativeElement.children[4].children[1].classList.add('enable');
        this.elem.nativeElement.children[4].children[1].classList.remove('disable');
    }

    @HostListener('mouseleave')
    onMouseLeave(row) {
        this.elem.nativeElement.children[4].children[1].classList.remove('enable');
        this.elem.nativeElement.children[4].children[1].classList.add('disable');

    }

}