import { Produtos } from './../produto.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProdutosService } from "./../produtos.service.ts.service";

@Component({
	selector: "app-prod-update",
	templateUrl: "./prod-update.component.html",
	styleUrls: ["./prod-update.component.scss"],
})
export class ProdUpdateComponent implements OnInit {
	produto!: Produtos;
	url: any = "";

	constructor(
		private route: Router,
		private prodService: ProdutosService,
		private router: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id = this.router.snapshot.paramMap.get("id");
		this.prodService.readById(id!).subscribe((produto) => {
			this.produto = produto;
			this.url = this.produto.image;
		});
	}

	onChange(event: any) {
		const files = <FileList>event.srcElement.files;
		const reader = new FileReader();
		reader.onload = () => {
			this.url = reader.result as string;
		};
		reader.readAsDataURL(files[0]);
	}

	updateProduto(): void {
		this.prodService.update(this.produto).subscribe(() => {
			this.prodService.showMessage("produto atualizado com sucesso!");
			this.route.navigate(["/produtos"]);
		});
	}

	cancel(): void {
		this.route.navigate(["/produtos"]);
	}
}
