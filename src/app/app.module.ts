import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BlsComponent } from './bls/bls.component';
import { AlsComponent } from './als/als.component';
import { Form800Component } from './form800/form800.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    VehicleComponent,
    BlsComponent,
    AlsComponent,
    Form800Component,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
