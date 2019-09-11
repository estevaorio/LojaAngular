import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
//import Swal from 'sweetalert2';
import { Produtos } from 'src/app/model/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {
protected produto: Produtos = new Produtos

  constructor(
    public produtoService: ProdutosService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  onsubmit(form) {
    console.log(form);
    try {
      this.produtoService.save(this.produto).subscribe(
        res => {
          console.log(res);
          this.produto = new Produtos;
          form.reset();
          this.router.navigate(["/"]);
          alert("Cadastrado!")
        },
        err => {
          console.log(err);
          alert({
            type: 'error',
            title: 'Oops...',
            text: 'Erro ao cadastrar o produto!\nVerifique os dados!',
          })
        }
      )
    }catch (e) {
      alert({
        type: 'warning',
        title: 'Oops...',
        text: 'Algo deu errado ao acessar a base de dados.',
        footer: '<a href="/">Ligue para nosso suporte ?</a>'
      })
    }
  }

}