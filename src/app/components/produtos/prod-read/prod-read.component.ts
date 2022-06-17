import { ProdutosService } from "./../produtos.service.ts.service";
import { Component, OnInit } from "@angular/core";
import { Produtos } from "../produto.model";

@Component({
	selector: "app-prod-read",
	templateUrl: "./prod-read.component.html",
	styleUrls: ["./prod-read.component.scss"],
})
export class ProdReadComponent implements OnInit {
	products: Produtos[] = [];

	displayedColumns = ["id", "nome", "price", "action"];

	constructor(private produtoService: ProdutosService) {}

	ngOnInit(): void {
		this.produtoService.read().subscribe((products) => {
			this.products = products;
		});
	}
}
