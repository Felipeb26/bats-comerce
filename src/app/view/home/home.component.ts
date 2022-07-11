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
		this.prodService.read().subscribe({
			next: (prod) => this.produtos = prod,
			error: (err) => console.log(err),
			complete: () => console.log("complete")
		});
	}

	addCart(item:any){
		this.addCart(item)
	}
}
