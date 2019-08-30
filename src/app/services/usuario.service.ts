import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Array<Usuario> = [
    { uid: "1", nome:"Saga", email: "sagadegemeos@gmail.com", pws:"11111"},
    { uid: "2", nome:"Shaka", email: "shakadevirgem@gmail.com", pws:"22222"},
  ];


  constructor() { }

  save(usuario:Usuario){
    this.usuarios.push(usuario);
  }
}
