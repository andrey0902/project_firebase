import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
    console.log('service value555', value);
    this.subject.next(value);
  }

}
