import { Component, OnInit } from '@angular/core';
import { produits } from 'src/model/produit.model';
import { LesProduitsService } from 'src/service/les-produits.service';

@Component({
  selector: 'app-list-de-produit',
  templateUrl: './list-de-produit.component.html',
  styleUrls: ['./list-de-produit.component.css']
})
export default class ListDeProduitComponent implements OnInit {

   tabProduit !: produits[];
   constructor(private toto: LesProduitsService){

   }
  ngOnInit(): void {
    this.tabProduit = this.toto.listerProduits()

  //   this.tabProduit = [

  //     {
  //       name : "JEAN",
  //       price : 10,
  //       //description :"Jean de qualité"
  //       available : true,
  //       img :"https://www.coachnlook.com/wp-content/uploads/2021/01/Les-diff%C3%A9rentes-coupes-de-jean-pour-femmes.jpg"

  //     },


  //     {
  //       name : "SHIRT",
  //       price : 20,
  //       //description :"Jean de qualité"
  //       available : false,
  //       img: "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg"
  //     },


  //     {
  //       name : "SKIRT",
  //       price : 40,
  //       //description :"Jean de qualité"
  //       available : true,
  //       img:"https://cdn.shopify.com/s/files/1/0609/0997/7793/products/ss2819-36p_black_1.jpg?v=1682355282"
  //     }

    
  //   ];
   
  // }




}
}
