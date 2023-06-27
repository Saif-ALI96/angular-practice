import { Component, OnInit } from '@angular/core';
import { produits } from 'src/model/produit.model';
import { LesProduitsService } from 'src/service/les-produits.service';

@Component({
  selector: 'app-element-ajouter-par-id',
  templateUrl: './element-ajouter-par-id.component.html',
  styleUrls: ['./element-ajouter-par-id.component.css']
})
export class ElementAjouterParIdComponent implements OnInit{

  tabProduit !: produits;
  constructor(private newElement: LesProduitsService){

  }
 ngOnInit(): void {
   this.tabProduit = this.newElement.getProduit(1);
  

 }

 



}
