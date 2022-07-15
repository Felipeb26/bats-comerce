import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any = []
  public produtoList = new BehaviorSubject<any>([])

  constructor() { }

  getProduct(){
    return this.produtoList.asObservable();
  }
  setProduct(product: any){
    this.cartItemList.push(...product);
    this.produtoList.next(product)
  }
  addCartProduct(product:any){
    this.cartItemList.push(product);
    this.produtoList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice():any{
    let grandTotal = 0;
    this.cartItemList.map((a:any) =>{
      grandTotal += a.total;
    })
  }
  removeProdCart(product:any){
    this.cartItemList.map((a:any, index:any) =>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }
  removeAllCart(){
    this.cartItemList = []
    this.produtoList.next(this.cartItemList);
  }
}
