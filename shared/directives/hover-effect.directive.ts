 import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: true
})
export class HoverEffectDirective {
  @Input() hoverColor: string = '#f0f0f0';
  private originalBackground: string;

  constructor(private el: ElementRef) {
    this.originalBackground = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.hoverColor;
    this.el.nativeElement.style.transition = 'background-color 0.3s ease';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalBackground;
  }
}