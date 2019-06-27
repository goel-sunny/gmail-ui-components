import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[actionEnable]'
})
export class ActionEnableDirective {

    constructor(private elem: ElementRef) {

    }
    @HostListener('mouseover')
    onMouseOver() {
        console.log('ok cool');

        this.elem.nativeElement.children[2].classList.remove('timeWidthClass');
        this.elem.nativeElement.children[2].classList.add('actionWidthClass');

        this.elem.nativeElement.children[3].classList.remove('enable');
        this.elem.nativeElement.children[3].classList.add('disable');


        this.elem.nativeElement.children[4].classList.add('enable');
        this.elem.nativeElement.children[4].classList.remove('disable');


        console.dir(this.elem);
    }

    @HostListener('mouseleave')
    onMouseLeave(row) {
        this.elem.nativeElement.children[2].classList.add('timeWidthClass');
        this.elem.nativeElement.children[2].classList.remove('actionWidthClass');

        this.elem.nativeElement.children[3].classList.add('enable');
        this.elem.nativeElement.children[3].classList.remove('disable');


        this.elem.nativeElement.children[4].classList.remove('enable');
        this.elem.nativeElement.children[4].classList.add('disable');

    }

}