import { Component,Input ,OnInit } from '@angular/core';
import { produits } from 'src/model/produit.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input() item !:produits;

  ngOnInit(): void {
    // this.item = new produits();
    // this.item.name = "hello";
    // this.item.price = 29; 
    // this.item.available = false;
  }

}
