import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import ListDeProduitComponent from './list-de-produit/list-de-produit.component';
import { ItemComponent } from './item/item.component';
import { ElementAjouterParIdComponent } from './element-ajouter-par-id/element-ajouter-par-id.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListDeProduitComponent,
    ItemComponent,
    ElementAjouterParIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
