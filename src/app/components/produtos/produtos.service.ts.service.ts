import { Produtos } from './produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, BehaviorSubject, observable, map } from 'rxjs';

@Injectable({
	providedIn: "root",
})
export class ProdutosService {


	baseUrl = "https://bat-server.herokuapp.com/produtos"
	constructor(private snacbar: MatSnackBar, private http: HttpClient) {}

	showMessage(msg: string): void {
		this.snacbar.open(msg, "X", {
			duration: 3000,
			verticalPosition: "top",
			horizontalPosition: "right",
		});
	}

	create(produto: Produtos): Observable<Produtos> {
		return this.http.post<Produtos>(this.baseUrl, produto)
	}

	read(): Observable<Produtos[]> {
		return this.http.get<Produtos[]>(this.baseUrl)
		
	}

	readById(id: string): Observable<Produtos> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<Produtos>(url);
	}

	update(produto: Produtos): Observable<Produtos> {
		const url = `${this.baseUrl}/${produto.id}`;
		return this.http.put<Produtos>(url, produto);
	}

	delete(produto: Produtos): Observable<Produtos> {
		const url = `${this.baseUrl}/${produto.id}`;
		return this.http.delete<Produtos>(url);
	}
}
