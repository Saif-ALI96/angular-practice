import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/models/carte.model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {

 @Input() modification !: contact;

 
  
}


