import { Router } from '@angular/router';
import { ProdutosService } from './../produtos.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produto.model';
import {DataUrl, NgxImageCompressService} from 'ngx-image-compress'

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
	url:DataUrl = ""

	constructor(
		private prodService: ProdutosService,
		private router: Router,
		private imageCompress: NgxImageCompressService) {}

	ngOnInit(): void {}

	compress(){
		return this.imageCompress
			.uploadMultipleFiles()
		.then((arrayOfFiles: { image: string, fileName:string, orientation: number }[]) => {
			console.table(arrayOfFiles)
			arrayOfFiles.forEach(img => {
				this.imageCompress.compressFile(img.image, img.orientation, 50,50)
				.then(newImg =>{
					this.url = newImg
					this.produto.image = newImg
				})
			})
		})
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
