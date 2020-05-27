import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Array<any>;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar()
  {
    this.produtoService.listar().subscribe(dados => this.produtos = dados);
  }

}
