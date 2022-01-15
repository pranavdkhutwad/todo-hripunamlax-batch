import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[todoId]'
})
export class TodoIdDirective implements OnInit {

  @Input() todoId = '';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setAttribute(this.eleRef.nativeElement, 'id', this.todoId);
  }
}
