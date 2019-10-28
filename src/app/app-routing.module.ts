import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from '../app/componentes/home/home.component';
import { RegistrarseComponent } from  '../app/componentes/registrarse/registrarse.component';
import { PaginaNoEncontradaComponent } from '../app/componentes/pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: '404', component: PaginaNoEncontradaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
