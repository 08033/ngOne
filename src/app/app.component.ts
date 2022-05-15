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
  values = { id: 0, name: "", age: 18, dob: "2004-01-01" };
  allHuman: humana[] = [];
  isEdit = false;

  constructor(private AppSvc: AppService) {
    //a) load data from server
    AppSvc.getPeople().subscribe(n => {
      this.allHuman = <humana[]>n.data;
    });
  }

  HandleClick() {
    //this.allHuman.push(this.values)    
    if (this.isEdit) {
      //c) upsert human:
      this.AppSvc.updatePupil(this.values).subscribe(u => {        
        //Update the human with index idx here...
        this.Reset();

      })
    }
    else {
      //b) insert human:
      this.AppSvc.insertPupil(this.values).subscribe(h => {
        this.allHuman.push((h.data as humana))
        this.Reset();
      })
      //this.Reset();
    }
  }

  SetValues(idx: number) {
    this.values = this.allHuman[idx]
    this.isEdit = true;
  }

  Reset() {
    this.values = { id: 0, name: "", age: 18, dob: "2004-01-01" };
    this.isEdit = false;
  }

  RemovePupil(idx: number) {
    //d) delete human:
    this.AppSvc.deletePupil(this.allHuman[idx]).subscribe(d => {
      this.isEdit = false;
      if (d.statusCode == "200")
        this.allHuman.splice(idx, 1)
    })
  }
}

