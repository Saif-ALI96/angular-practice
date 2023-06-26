import { Injectable } from '@angular/core';
import { produits } from 'src/model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class LesProduitsService {


  tabProduit: produits[]= [

    {
      name : "JEAN",
      price : 10,
      //description :"Jean de qualité"
      // available : true,
      img :"https://www.coachnlook.com/wp-content/uploads/2021/01/Les-diff%C3%A9rentes-coupes-de-jean-pour-femmes.jpg",
      id : 0

    },


    {
      name : "SHIRT",
      price : 20,
      //description :"Jean de qualité"
      // available : false,
      img: "https://img.freepik.com/photos-premium/tshirt-blanc-fond-blanc-vue-avant-arriere-generative-ai_446633-7047.jpg",
      id : 1
    },


    {
      name : "SKIRT",
      price : 40,
      //description :"Jean de qualité"
      // available : true,
      img:"https://media.istockphoto.com/photos/skirt-picture-id518178960",
      id : 2
    }

  
  ];

  listerProduits():produits[] {
    return this.tabProduit ;
  }
  // nous allons ajouter un id a notre service pour afficher un seul element
  
  getProduit (id:number): produits{
    // const produits =this.listerProduits();
   for(let i=0;i<this.tabProduit.length;i++){

     if( this.tabProduit[i].id === id){
       return this.tabProduit[i];
     }
     
    }
    return new produits();

  }
  
}






