import { Directive, HostBinding, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appHover]'
})
 
export class HoverDirective {
  @HostBinding('class.show') isOpen = false;
  @HostListener('mouseenter') onEnter() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') onLeave() {
    this.isOpen = false;
  }
}