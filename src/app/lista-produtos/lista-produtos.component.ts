import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Array<any>;
  produto: any;
  displayedColumns: string[] = ['id', 'produto', 'preco', 'quantidade'];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produto = {};

    this.listar();
  }

  listar()
  {
    this.produtoService.listar().subscribe(dados => this.produtos = dados);
  }

  adicionar(frm:NgForm)
  {
    this.produtoService.adicionar(frm.value).subscribe(dados => {
        frm.reset();
    });
  }

}
