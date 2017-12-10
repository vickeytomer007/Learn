import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText:string="You add item here";
  goalText:string="My life Goal";
  goal=[];
  constructor() { }

  ngOnInit() {
 this.itemCount=this.goal.length;
  }
addItem(){
  this.goal.push(this.goalText);
  this.goalText='';
  this.itemCount=this.goal.length;
}
}
