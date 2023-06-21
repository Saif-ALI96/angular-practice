import { Component } from '@angular/core';
import { coffee } from 'src/test.model';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

    
  test !: coffee

  ngOnInit(){
   this.test = new coffee();
   this.test.grain = 5;
   this.test.marqueOfCoffee = "grand mother";
 }

}


