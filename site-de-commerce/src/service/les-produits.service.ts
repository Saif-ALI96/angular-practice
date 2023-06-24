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
      img :"https://www.coachnlook.com/wp-content/uploads/2021/01/Les-diff%C3%A9rentes-coupes-de-jean-pour-femmes.jpg"

    },


    {
      name : "SHIRT",
      price : 20,
      //description :"Jean de qualité"
      // available : false,
      img: "https://img.freepik.com/photos-premium/tshirt-blanc-fond-blanc-vue-avant-arriere-generative-ai_446633-7047.jpg"
    },


    {
      name : "SKIRT",
      price : 40,
      //description :"Jean de qualité"
      // available : true,
      img:"https://media.istockphoto.com/photos/skirt-picture-id518178960"
    }

  
  ];

  listerProduits():produits[] {
    return this.tabProduit ;

  }
 
}



