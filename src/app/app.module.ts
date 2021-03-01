import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StationsComponent } from './components/stations/stations.component';
import {FormsModule} from '@angular/forms';
import { MapsComponent } from './components/maps/maps.component';
import { AppRoutingModule } from './app-routing.module';
import {AgmCoreModule} from '@agm/core';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CompenentsComponent } from './components/compenents/compenents.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    MapsComponent,
    HomeComponent,
    CompenentsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7zn6DIXiAwixrn9TeJ6zskwUyGGMeTg0',
      libraries: ['places']
    }), RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
