import { Component, OnInit } from '@angular/core';
import { voiture } from 'src/models/voiture.model';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit{

  nouveauVoiture !: voiture;

  ngOnInit() {
    this.nouveauVoiture = new voiture;

    this.nouveauVoiture.marque= "Marque : BMW";
    this.nouveauVoiture.modele="Nom de Voiture : M4 50 Jahre";
    this.nouveauVoiture.color="Rouge";
    this.nouveauVoiture.date_achat = "22 juin 2022";
    this.nouveauVoiture.imgVoiture = "https://img4.autodeclics.com/6/2022/05/photo_article/108505/46173/1200-L-bmw-m4-50-jahre-2022-une-dition-limite-pour-fter-les-50-ans-de-bmw-m.jpg";
    this.nouveauVoiture.client = true;
    
  }

}
