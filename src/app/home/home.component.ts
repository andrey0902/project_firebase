import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'home',
  providers: [],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Home` component');
  }
}
