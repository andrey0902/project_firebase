import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class StateUsedEmailService {
  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject();
  }

  public get state() {
    return this.subject.asObservable();
  }

  public set state(data: any) {
    this.subject.next(data);
  }
}
