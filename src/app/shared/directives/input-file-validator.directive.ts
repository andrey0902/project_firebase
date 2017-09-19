import { Directive, ElementRef, HostListener } from '@angular/core';

import { EventsService } from '../../services/events/events.service';
import { regexp } from '../help-regexp';

@Directive({
  selector: '[sellItInputFile]',
  exportAs: 'mySellItInputFile',
})
export class ValidationInputFileDirective {
  constructor(
    private el: ElementRef,
  ) {}
  @HostListener('change', ['$event'])
  public upPage($event) {
    let target = $event.target || $event.srcElement;
    target = target.files;
    if (!target.length) {
      this.error('error');
      return;
    } else if (target.length) {
      for (let key in target) {
        if (!target.hasOwnProperty(key)) { continue; }
        if (!regexp.img.test(target[key].name)) {
          this.error('error');
          return;
        }
      }
      this.success();
    }
  }
  private error(message) {
    this.el.nativeElement.className = 'error';
  }
  private success() {
    this.el.nativeElement.className = 'my-success';
  }
}
