import { Component, Input, Output } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ngOne';
  //@Input() values = { name: "He", age: 15, dob: "10/10/2001" };  
  values = { name: "", age: 18, dob: "2004-01-01" };
  allHuman: humana[] = [];  

  HandleClick() {
    //alert('World');    
    // console.log('values')
    // console.log(this.allHuman);
    this.allHuman.push(this.values)
    this.Reset();
  }

  SetValues(idx: number) {
    this.values = this.allHuman[idx]
  }

  Reset() {
    this.values = { name: "", age: 18, dob: "2004-01-01" };
  }
}

interface humana {
  name: string
  age: number
  dob: string
}
