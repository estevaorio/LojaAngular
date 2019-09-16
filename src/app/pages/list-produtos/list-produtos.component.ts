import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutoComponent implements OnInit {

  protected produto:any;

  constructor(
    public produtoService: ProdutosService,
  ) { }

  ngOnInit() {
    this.produto = this.produtoService.getAll();
  }

}