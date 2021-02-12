import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') color: string;

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color || 'cyan');
    console.log('directive mouse enter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.style.color = color;
  }
}
