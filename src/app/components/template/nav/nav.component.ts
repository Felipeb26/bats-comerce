import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }
  opened = false;

  ngOnInit(): void {
    let nav = document.getElementsByClassName("sidenav") as HTMLCollectionOf<HTMLElement>
    if(nav.length != 0){
      nav[0].style.marginTop = "5rem"
    }
  }

  outOrIn():void{
    const token = localStorage.getItem('token')
    if(token != null){
      localStorage.clear()
    }
  } 
}
