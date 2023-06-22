import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewCarComponent } from './new-car/new-car.component';
import { ListDeVoitureComponent } from './list-de-voiture/list-de-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCarComponent,
    ListDeVoitureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
