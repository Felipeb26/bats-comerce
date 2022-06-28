import { Router } from '@angular/router';
import { ProdutosService } from './../produtos.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produto.model';

@Component({
	selector: "app-prod-create",
	templateUrl: "./prod-create.component.html",
	styleUrls: ["./prod-create.component.scss"],
})
export class ProdCreateComponent implements OnInit {
	produto: Produtos = {
		nome: "",
		price: 0,
		image: "",
	};
	url:string = "assets/img/logo.png"

	constructor(private prodService: ProdutosService, private router: Router) {}

	ngOnInit(): void {}

	onChange(event: any) {
		const files = <FileList>event.srcElement.files;
		const reader = new FileReader();
		reader.onload = () => {
			this.url = reader.result as string;
			this.produto.image = reader.result as string
		};
		reader.readAsDataURL(files[0]);
	}

	createProduct(): void {
		this.prodService.create(this.produto).subscribe(() => {
			this.prodService.showMessage("Produto criado com sucesso!");
			this.router.navigate(["/produtos"]);
		});
	}
	cancel(): void {
		this.router.navigate(["/produtos"]);
	}
}
