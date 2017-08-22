/**
 * Created by andrei on 22.08.2017.
 */
import {
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [],
  providers: []
})
export class HomeModule {
}
