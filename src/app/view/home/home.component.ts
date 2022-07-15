import { CartService } from './../../components/produtos/cart.service.ts.service';
import { ProdutosService } from './../../components/produtos/produtos.service.ts.service';
import { Produtos } from '../../components/produtos/produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	produtos: Produtos[] = [];
	produtoList:any

	constructor(
		private prodService:ProdutosService,
		private cartService:CartService) {}

	ngOnInit(): void {
		this.prodService.read().subscribe( res =>{
			this.produtos = res;
			this.produtoList = res;
			this.produtoList.forEach((a:any) =>{
				Object.assign(a,{quantidade:1, total:a.price})
			})
		});
	}

	addCart(item:any){
		if(item == null){
			return;
		}
		this.cartService.addCartProduct(item)
	}
}
