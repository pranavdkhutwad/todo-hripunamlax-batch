import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appTodo]'
})
export class TodoDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor?: string;
    @HostBinding('style.color') color?: string;
    
    @HostListener('mouseenter') mouseEnter() {
        // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', '#00f');
        this.backgroundColor = '#00f';
    }

    @HostListener('mouseleave') mouseLeave() {
        // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.defaultColor);
        this.backgroundColor = this.defaultColor;
    }
    constructor() {
        
    }

    defaultColor: string = '#f00';

    

    ngOnInit(): void {
        // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.defaultColor);
        // this.renderer.setStyle(this.eleRef.nativeElement, 'color', '#fff');

        this.backgroundColor = this.defaultColor;
        this.color = '#fff';
    }
}