import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from '../produto.model';
import { ProdutosService } from '../produtos.service.ts.service';

@Component({
	selector: "app-prod-delete",
	templateUrl: "./prod-delete.component.html",
	styleUrls: ["./prod-delete.component.scss"],
})
export class ProdDeleteComponent implements OnInit {
	produto!: Produtos;

	constructor(
		private route: Router,
		private prodService: ProdutosService,
		private router: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id = this.router.snapshot.paramMap.get("id");
		this.prodService.readById(id!).subscribe((produto) => {
			this.produto = produto;
		});
	}

	deleteProduto(): void {
		  this.prodService.delete(this.produto).subscribe(() => {
			this.prodService.showMessage("produto excluido com sucesso!");
			this.route.navigate(["/produtos"]);
		});
	}

	cancel(): void {
		this.route.navigate(["/produtos"]);
	}
}
