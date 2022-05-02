import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { OrderComponent } from './order/order.component';
import { MapComponent } from './map/map.component';
import { SimpleComponent } from './simple/simple.component';
import { BurgerComponent } from './burger/burger.component';
import { Burger2Component } from './burger2/burger2.component';
import { Burger3Component } from './burger3/burger3.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    JobDetailsComponent,
    OrderComponent,
    MapComponent,
    SimpleComponent,
    BurgerComponent,
    Burger2Component,
    Burger3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
