import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';

import { FormsModule } from "@angular/forms";
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { AddProdutoComponent } from './pages/add-produtos/add-produtos.component';
import { ListProdutoComponent } from './pages/list-produtos/list-produtos.component';
import {EnderecoComponent } from './pages/add-endereco/add-endereco.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    AddProdutoComponent,
    ListProdutoComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
