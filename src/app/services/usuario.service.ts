import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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

 get(key){
  return this.dbfire.object<Usuario>("usuarios").valueChanges()

 }

 update(usuario: Usuario,key){
   return this.dbfire.object<Usuario>("usuarios/" + key).update
   (usuario);
 }

 remove(key){
   return this.dbfire.object("usuarios/" + key).remove()
 }

} 
