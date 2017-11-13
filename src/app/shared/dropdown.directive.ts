import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() { }

  ngOnInit()  {
    
  }
  @HostListener('click')toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  
  
}
