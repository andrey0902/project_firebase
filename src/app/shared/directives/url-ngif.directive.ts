import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs';

@Directive({selector: '[myUrlNgIf]'})
export class UrlNgIfDirective {
  constructor(private router: Router,
              private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef ) {
    this.router.events.debounceTime(0).subscribe((res: NavigationEnd) => {
      this.toggleContents(res.url);
    });
  }
  private toggleContents(path) {
    if (path === '/users') {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainerRef.clear();
  }
}
