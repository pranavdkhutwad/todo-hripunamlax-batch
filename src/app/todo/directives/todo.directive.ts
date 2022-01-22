import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appTodo]'
})
export class TodoDirective implements OnInit {
    @HostBinding('style.boxShadow') boxShadow?: string;
    @HostBinding('style.transition') transition?: string;

    @HostListener('mouseenter') mouseEnter() {
        // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', '#00f');
        // this.backgroundColor = '#00f';

        this.boxShadow = '2px 2px 5px rgb(0, 0, 0, 0.3)';
        this.transition = 'all .5s ease';
    }

    @HostListener('mouseleave') mouseLeave() {
        // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.defaultColor);
        // this.backgroundColor = this.defaultColor;

        this.boxShadow = 'none';
    }
    constructor() {
        
    }

    // defaultColor: string = '#f00';

    

    ngOnInit(): void {
        // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.defaultColor);
        // this.renderer.setStyle(this.eleRef.nativeElement, 'color', '#fff');

        // this.backgroundColor = this.defaultColor;
        // this.color = '#fff';
    }
}