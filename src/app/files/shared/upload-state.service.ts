import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UploadStateService {
  private subject: Subject<any> = new Subject();
  public set state(value: any) {
    this.subject.next(value);
  }
  public get state() {
    return this.subject.asObservable();
  }
}
