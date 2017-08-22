import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {
  NgModule,
} from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import '../styles/styles.scss';
import '../styles/headings.css';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NoContentComponent } from './not-found-404/no-content.component';
import { firebaseConfig } from './core/firebase-config';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class AppModule {
}
