/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public ngOnInit() {
    console.log('Initial App Loader');
  }

}

