import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  outOrIn():void{
    const token = localStorage.getItem('token')
    if(token != null){
      localStorage.clear()
    }
  } 
}
