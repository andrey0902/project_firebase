/**
 * Created by andrei on 01.09.2017.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { SearchStateService } from '../../search-state/search-state.service';

@Component({
 selector: 'search-app',
 templateUrl: 'search.component.html',
 styleUrls: ['search.component.scss']
})

export class SearchComponent implements OnInit {
  public changeColor: boolean = false;
  private searchTerms = new Subject<string>();
  private fbSubj = new Subject<any>();
  private items: any;
 constructor(public db: AngularFireDatabase,
             private searchStateService: SearchStateService) {
   /*внедрить сервис для поиска */
   this.items = db.list('/users', {
     query: {
       orderByChild: 'name',
       equalTo: this.fbSubj
     }
   });
 }
  public filterBy(name: string) {
    this.fbSubj.next(name);
   }
 public ngOnInit() {
    this.searchTerms
     .debounceTime(300)        // wait for 300ms pause in events
     .distinctUntilChanged()   // ignore if next search term is same as previous
     .switchMap((term) => {
       console.log('doing the search', term);

       this.searchStateService.state = term;
       this.filterBy(term);
       return term;
       // switch to new observable each time
       // return the http search observable
       // делаем запрос в БД для поиска
       // и после делаем сабджек в другой компонент
     }).subscribe();
    this.items.subscribe((user) => {
      console.log('search', user);
    });
 }
 public search(value: string) {
   console.log(value);
   if (!value) { return; }
   this.searchTerms.next(value);
 }
}
