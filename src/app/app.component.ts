import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simplilearn';

  name="";
  status="";

  ontyping(event:Event){
    this.name=(<HTMLInputElement>event.target).value;
  }

  signUp(){
    this.status="This site is not available....We are working on it, Check after sometime";
  }
}
