/**
 * Created by andrei on 01.09.2017.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  private items: any;

  constructor(private searchStateService: SearchStateService) {
    /*внедрить сервис для поиска */
  }

  public ngOnInit() {
    this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap((term) => {
        this.searchStateService.state = term;
        return term;
      }).subscribe();
  }

  public search(value: string) {
    console.log('hz)', value);
    if (!value) {
      this.searchTerms.next('clear-1');
      return;
    }
    this.searchTerms.next(value);
  }
}
