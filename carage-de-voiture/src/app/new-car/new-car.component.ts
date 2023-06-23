import { Component, Input, OnInit } from '@angular/core';
import { car } from 'src/model/car.model';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  @Input() car!: car;
  
  ngOnInit() {
    // this.car = new car;
    // this.car.model = "Serie 1 occa";
    // this.car.year =  2023;
    // this.car.color= "black" ;
    // this.car.weight = 2500;
    // this.car.price =1349876;
    // this.car.brand ="BMW";
    // this.car.description =" 'Especially good for container gardening, the Angelonia will keep blooming all summer even if old flowers are removed. Once tall enough to cut, bring them inside and you'll notice a light scent that some say is reminiscent of apples ' ";
    // this.car.image = "";
 }

}
