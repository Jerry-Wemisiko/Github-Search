import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {}

  @Input() defaultColor: string = '';
  @Input('appHighlight') highlightColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.defaultColor || this.highlightColor || 'yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
