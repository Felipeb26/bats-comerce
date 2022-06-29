import { Produtos } from './../produto.model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProdutosService } from "./../produtos.service.ts.service";
import { DataUrl, NgxImageCompressService } from "ngx-image-compress";

@Component({
	selector: "app-prod-update",
	templateUrl: "./prod-update.component.html",
	styleUrls: ["./prod-update.component.scss"],
})
export class ProdUpdateComponent implements OnInit {
	produto!: Produtos;
	url: DataUrl = "";

	constructor(
		private route: Router,
		private prodService: ProdutosService,
		private router: ActivatedRoute,
		private imageCompress: NgxImageCompressService) {}

	ngOnInit(): void {
		const id = this.router.snapshot.paramMap.get("id");
		this.prodService.readById(id!).subscribe((produto) => {
			this.produto = produto;
			this.url = this.produto.image;
		});
	}

	compress() {
		return this.imageCompress.uploadMultipleFiles().then(
			(
				arrayOfFiles: {
					image: string;
					fileName: string;
					orientation: number;
				}[]
			) => {
				console.table(arrayOfFiles);
				arrayOfFiles.forEach((img) => {
					this.imageCompress
						.compressFile(img.image, img.orientation, 50, 70)
						.then((newImg) => {
							this.url = newImg;
							this.produto.image = newImg;
						});
				});
			}
		);
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
