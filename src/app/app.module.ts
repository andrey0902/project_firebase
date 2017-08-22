import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {
  NgModule,
} from '@angular/core';

import {
  RouterModule,
} from '@angular/router';

import '../styles/styles.scss';
import '../styles/headings.css';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NoContentComponent } from './not-found-404/no-content.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  providers: []
})
export class AppModule {
}
