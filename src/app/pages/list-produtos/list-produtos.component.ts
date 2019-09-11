import { Produtos } from './../../model/produtos';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  protected produtos:any;

  constructor(
    public produtosService: ProdutosService,
  ) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll();
  }

}