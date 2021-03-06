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
import { AuthModule } from './auth/auth.module';
import { ChartModule } from 'angular2-highcharts';
import 'chart.js';
import { UsersModule } from './users/users.module';
import { SearchStateService } from './shared/search-state/search-state.service';
import { FileListModule } from './files/files.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications/dist';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    AuthModule,
    UsersModule,
    FileListModule,
    AppRoutingModule,
    ChartModule.forRoot(
      require('highcharts'),
      require('highcharts/modules/exporting')
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SimpleNotificationsModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  providers: [
    AngularFireDatabase,
    SearchStateService,
    NotificationsService
  ],
  exports: [
    ChartModule,
    SimpleNotificationsModule
  ]
})
export class AppModule {
}
