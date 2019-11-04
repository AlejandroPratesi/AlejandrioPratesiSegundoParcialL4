import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoComponent } from './componentes/listado/listado.component';

// SERVICIOS
import {UserService} from './servicios/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    RegistrarseComponent,
    LoginComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
