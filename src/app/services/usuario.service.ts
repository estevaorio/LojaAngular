import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Usuario } from '../model/usuario';
import { environment } from './../../environments/environment';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Array<Usuario> = [
    { uid: "1", nome:"Saga", email: "sagadegemeos@gmail.com", pws:"11111"},
    { uid: "2", nome:"Shaka", email: "shakadevirgem@gmail.com", pws:"22222"},
  ];

  protected db = environment.serverAPI;

  constructor(
    protected http:HttpClient,
    protected dbfire:AngularFireDatabase
  ) { }

  save(usuario:Usuario){
    //this.usuarios.push(usuario);
    //return this.http.post(this.db + "usuarios", usuario);
    //return this.dbfire.object("usuarios").set(usuario);
    return this.dbfire.list("usuarios").push(usuario);
  }

getAll(){
  //return this.http.get(this.db + "usuarios");
  //return this.dbfire.list<Usuario>("usuarios").valueChanges();
  return this.dbfire.list<Usuario>("usuarios").snapshotChanges()
  .pipe(
    map(change => 
      change.map(c => ({ key: c.payload.key,...c.payload.val()})))
  );
 }

} 
