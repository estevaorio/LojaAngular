import { Swal } from 'sweetalert2';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  //usuario:Usuario = new Usuario;
  protected usuario: Usuario = new Usuario;
  private key: string = null;

    constructor(
    public usuarioService: UsuarioService,
    protected router:Router,
    protected activedRouter: ActivatedRoute
  ) { }

  ngOnInit() {      
       this.key= this.activedRouter.snapshot.paramMap.get("key");
       if(this.key){
       this.usuarioService.get(this.key).subscribe(res=>{
         this.usuario = res;
      }
    ); 
  }
}

  onsubmit(form){
    console.log(form);
    try{
      if(this.key){
        this.usuarioService.update(this.usuario, this.key).then(
          res => {
            //console.log(res);
            this.usuario = new Usuario;
            form.reset();
            this.router.navigate(['/']);
            Swal.fire("Atualizado!")
          },
          err=>{
            //console.log(err);
            Swal.fire({
              type:'error',
              title: 'Oops...',
              text:'Erro ao atualizar o usuario!\nVerifique os dados!',
            })
          }
        );
      }else{    
    this.usuarioService.save(this.usuario).then(
      res =>{
        console.log(res);
        this.usuario = new Usuario;
        form.reset();
        this.router.navigate(["/"]);
        Swal.fire("Cadastrado!")
      },
      err=>{
        console.log(err);
        Swal.fire({
          type:'error',
          title: 'Oops...',
          text:'Erro ao cadastrar o usuario!\nVerifique os dados!',
        })
      }
    );
    this.usuario = new Usuario;
     //console.log(this.usuario, this.usuarioService.usuarios);
      form.reset();
        this.router.navigate(["/addUsuario"]);
  }

  }
}