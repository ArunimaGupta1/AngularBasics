import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  url = "./assets/image/profile.jpg";
  height = 400;
  width = 200;
  float = "center";
  name = "Arunima Gupta";
  flag = false;

  constructor() { }

  ngOnInit(): void {
  }

  display(){
    this.flag = !this.flag;
    console.log("Display button clicked"+" "+this.flag)
  }

}
