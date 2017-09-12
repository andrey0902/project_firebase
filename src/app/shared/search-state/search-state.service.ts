import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchStateService {
  private subject: Subject<any>;
  constructor() {
    this.subject = new Subject();
  }
  public get state() {
    return this.subject.asObservable();
  }
  public set state(value: any) {
    this.subject.next(value);
  }

}
