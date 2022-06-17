import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from '../produto.model';
import { ProdutosService } from './../produtos.service.ts.service';

@Component({
  selector: 'app-prod-update',
  templateUrl: './prod-update.component.html',
  styleUrls: ['./prod-update.component.scss']
})
export class ProdUpdateComponent implements OnInit {

  produto!: Produtos;

  constructor(
    private route:Router,
    private prodService:ProdutosService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.prodService.readById(id!).subscribe((produto) => {
		this.produto = produto;
	});
  }

  updateProduto(): void{
    this.prodService.update(this.produto).subscribe(() =>{
      this.prodService.showMessage("produto atualizado com sucesso!")
      this.route.navigate(['/produtos']);
    });
  }

  cancel(): void{
    this.route.navigate(['/produtos'])
  }
}
