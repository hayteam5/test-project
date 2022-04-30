import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { OrderComponent } from './order/order.component';
import { MapComponent } from './map/map.component';
import { SimpleComponent } from './simple/simple.component';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    JobDetailsComponent,
    OrderComponent,
    MapComponent,
    SimpleComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
