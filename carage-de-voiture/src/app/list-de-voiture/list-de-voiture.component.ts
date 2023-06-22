import { Component, OnInit } from '@angular/core';
import { car } from 'src/model/car.model';

@Component({
  selector: 'app-list-de-voiture',
  templateUrl: './list-de-voiture.component.html',
  styleUrls: ['./list-de-voiture.component.css']
})
export class ListDeVoitureComponent implements OnInit{
  tabvoiture !: car[];
ngOnInit(): void {

  this.tabvoiture = [
    {
    model : "test",
    brand :"test",
    price :10,
    color:"rouge",
    year :2023,
    description : "test",
    image : "/assets/img/cars/bmw_i8.jpg",
    weight : 3433

   },

   {
    model : "test2",
    brand :"test2",
    price :10,
    color:"bleu",
    year :2021,
    description : "test2",
    image : "/assets/img/cars/bmw_i8.jpg",
    weight : 46456

   },

   {
    model : "test3",
    brand :"test3",
    price :10,
    color:"jaun",
    year :2020,
    description : "test3",
    image : "/assets/img/cars/bmw_i8.jpg",
    weight : 8668

   },

  ];

}






}
