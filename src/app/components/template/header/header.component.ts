import { CartService } from './../../produtos/cart.service.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItens: number = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe( (e:any) =>{
      this.totalItens = e.length
    })
  }

}
