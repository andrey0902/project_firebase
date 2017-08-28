import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({selector: '[ToggleClass]'})
export class ToggleClassDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('click', ['$event'])
  public clilck(e) {
    let a = this.el.nativeElement.querySelectorAll('.link');
    a.forEach((element) => {
      element.classList.remove('active');
    });
    e.target.classList.add('active');
  }
}
