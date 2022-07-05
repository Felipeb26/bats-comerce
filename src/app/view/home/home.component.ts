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

	constructor(private prodService:ProdutosService) {}

	ngOnInit(): void {
		this.prodService.read().subscribe((products) => {
			this.produtos = products;
		});
	}
}
