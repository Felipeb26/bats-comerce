import { Produtos } from './produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: "root",
})
export class ProdutosService {
	baseUrl =
	 	"https://my-json-server.typicode.com/felipeb26/bats-comerce/produtos";

	//baseUrl = "http://localhost:3001/produtos"
	constructor(private snacbar: MatSnackBar, private http: HttpClient) {}

	showMessage(msg: string): void {
		this.snacbar.open(msg, "X", {
			duration: 3000,
			verticalPosition: "top",
			horizontalPosition: "right",
		});
	}

	create(produto: Produtos): Observable<Produtos> {
		return this.http.post<Produtos>(this.baseUrl, produto,{
			reportProgress: true,
			observe: 'body'
		});
	}

	read(): Observable<Produtos[]> {
		return this.http.get<Produtos[]>(this.baseUrl);
	}

	readById(id: string): Observable<Produtos> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<Produtos>(url);
	}

	update(produto: Produtos): Observable<Produtos> {
		const url = `${this.baseUrl}/${produto.id}`;
		return this.http.put<Produtos>(url, produto,{
			reportProgress:true,
			observe: 'body'
		});
	}

	delete(produto: Produtos): Observable<Produtos> {
		const url = `${this.baseUrl}/${produto.id}`;
		return this.http.delete<Produtos>(url);
	}
}
