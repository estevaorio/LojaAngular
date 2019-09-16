import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produtos } from '../model/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  protected db = environment.serverAPI;

  constructor(
    protected http: HttpClient
  ) { }

  save(produtos: Produtos) {
    //this.usuarios.push(usuario);
    return this.http.post(this.db + "produtos", produtos);
  }

  getAll() {
    return this.http.get(this.db + "produtos");
  }
}
