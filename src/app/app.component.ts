import { Component, Input, Output } from '@angular/core';
import { humana } from './../services/humanModel'
import { AppService } from './../services/appservice'

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

  constructor(AppSvc: AppService) {
    //a) load data from server
    AppSvc.getPeople().subscribe(n => {         
      this.allHuman = <humana[]>n.data;        
    });    
  }

  HandleClick() {
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

