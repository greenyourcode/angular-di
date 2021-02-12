import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    console.log('directive init');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'cyan');
    console.log('directive mouse enter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }
}
