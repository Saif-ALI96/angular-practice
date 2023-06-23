 import { Injectable } from "@angular/core";
 import { contact } from "src/models/carte.model";
 // import * as firebase from "firebase"

@Injectable({providedIn : "root"})
export class contactservice {

    
  tab : contact[] = [
    {
        name: "Saif",
        email: "exemple@gmail.com",
        date: "01 septembre 1990",
        contenu : "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam consectetur unde autem inventore.",
        img: "https://i.pinimg.com/originals/a6/8b/f9/a68bf97c851a1d78fad49165a8fd4999.jpg",
        modele : true
   },
  
   {
    name: "Gaetan",
    email: "exemple@outlook.com",
    date: "23 janvier 1990",
    contenu : "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam consectetur unde autem inventore.",
    img: "https://leclaireur.fnac.com/wp-content/uploads/2022/08/superman.jpg",
    modele : false
   },
  
   {
    name: "Jules",
    email: "exemple@outlook.com",
    date: "15 avril 1996",
    contenu : "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam consectetur unde autem inventore.",
    img: "https://cdn-uploads.gameblog.fr/img/news/425341_645e546f4ddec.jpg",
    modele : true
   },
  
   {
    name: "Typhaine",
    email: "exemple@outlook.com",
    date: "10 juillet 1996",
    contenu : "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam consectetur unde autem inventore.",
    img: "https://assets.suaramerdeka.com/crop/0x0:0x0/750x500/webp/photo/2022/04/09/1574500431.jpg",
    modele : false
   }

   ];
   
   listerContact(): contact[]{
    return this.tab;
     
   }

   }


      

  
