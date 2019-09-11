import { Produtos } from './../model/produtos';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {
  produtos: Array<Produtos> = [
    { uid: "1", nome:"Adidas", tipo:"Bola", quantidade:"23", valor:"R$ 100,00"},
    { uid: "1", nome:"Nike", tipo:"Chuteira", quantidade:"30", valor:"R$ 150,00"},

    ];

  protected db = environment.serverAPI;

  constructor(
    protected http:HttpClient
  ) { }

  save(produtos:Produtos){
    //this.produtos.push(produtos);
    return this.http.post(this.db + "produtos", produtos);
  }

getAll(){
  return this.http.get(this.db + "produtos");
 }

} 
