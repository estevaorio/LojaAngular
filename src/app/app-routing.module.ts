import { EnderecoComponent } from './pages/add-endereco/add-endereco.component';
import { AddProdutoComponent } from './pages/add-produtos/add-produtos.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"addUsuario/:id", component:AddUsuarioComponent},
  {path:"addProdutos", component:AddProdutoComponent},
  {path:"addEndereco", component:EnderecoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
