import { UsuarioService } from './../services/usuario.service';
import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  protected usuarios:any;

  constructor(
    public usuarioService: UsuarioService,
    protected router:Router
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }
  editar (usuario) {
    //console.log(usuario.key); 
    this.usuarios = this.usuarioService.getAll();       
    this.router.navigate(['addUsuario',usuario.key]);
  }
  apagar(usuario){
    if (confirm("Apagar o Usuário?"))
    this.usuarioService.remove(usuario.key)
  }

}
