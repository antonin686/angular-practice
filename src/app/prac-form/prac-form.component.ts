import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prac-form',
  templateUrl: './prac-form.component.html',
  styleUrls: ['./prac-form.component.css']
})
export class PracFormComponent implements OnInit{
  
  username: string = "";
  
  ngOnInit(): void {}

  canClick () {
    return this.username == "" ? true : false;
  }

  reset(){
    this.username = "";
  }
}
