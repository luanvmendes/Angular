import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosUrl = 'https://localhost:5001/api/Produtos';

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<any[]>(`${this.produtosUrl}`);
  }

  adicionar(produto: any)
  {
    return this.http.post(`${this.produtosUrl}`, JSON.stringify(produto), {
      headers: {
          'Content-Type': 'application/json'
      }
      });
  }

}
