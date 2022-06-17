import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-produtos',
  templateUrl: './crud-produtos.component.html',
  styleUrls: ['./crud-produtos.component.scss']
})
export class CrudProdutosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCreateProd(): void{
    this.router.navigate(['/produtos/create']);
  }
}
