import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ListDeContactComponent } from './list-de-contact/list-de-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    VoitureComponent,
    ListDeContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
