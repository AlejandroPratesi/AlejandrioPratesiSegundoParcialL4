import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

// COMPONENTES
import { HomeComponent } from '../app/componentes/home/home.component';
import { RegistrarseComponent } from  '../app/componentes/registrarse/registrarse.component';
import { PaginaNoEncontradaComponent } from '../app/componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './componentes/login/login.component';
import {ListadoComponent} from './componentes/listado/listado.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: '404', component: PaginaNoEncontradaComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Listado', component: ListadoComponent },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
