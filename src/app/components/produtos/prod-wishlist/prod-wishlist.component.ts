import { CartService } from './../cart.service.ts.service';
import { LoaderService } from './../../loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-wishlist',
  templateUrl: './prod-wishlist.component.html',
  styleUrls: ['./prod-wishlist.component.scss']
})
export class ProdWishlistComponent implements OnInit {

  public produtos:any = [];
  public grandTotal:number = 0;

  constructor(
    public load:LoaderService,
    public cartService:CartService
  ) { }

  ngOnInit(): void {
    const emptyList = document.getElementById('emptyProdList');
    this.cartService.getProduct().subscribe( res =>{
      this.grandTotal =this.cartService.getTotalPrice();
      if(res <= 0){
        emptyList!.style.display = "block"
      }else{
        emptyList!.style.display = "none"
        this.produtos = res
      }
    })
  }

}
