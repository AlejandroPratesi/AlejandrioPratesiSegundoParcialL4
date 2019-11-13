import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Persona } from '../clases/persona';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient,
              private loginServicio: LoginService) { }

  guardarPersonas(personas: Persona[]){
    const token = this.loginServicio.getIdToiken()
    this.httpClient.put('https://listado-personas-21f8c.firebaseio.com/datos.json?auth=' + token,personas)
    .subscribe(
      response => console.log("Resultado Guardar Persona" + response),
      error => console.log("Error al guardar personas: " + error)
      );
  }

  CargarPersonas(){
    // pido el TOKEN
    const token = this.loginServicio.getIdToiken()
    // Obtengo los datos de la base de datos
    return this.httpClient.get('https://listado-personas-21f8c.firebaseio.com/datos.json?auth=' + token);
    // regresa un observable por lo tanto hay que subscribirse
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginServicio.getIdToiken()
    let url: string;
    url = 'https://listado-personas-21f8c.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log("Modificar: " + response)
        ,
        error => console.log("Error al modificar persona: " + error)
      )
  }

  eliminarPersona(index:number){
    const token = this.loginServicio.getIdToiken()
    let url: string;
    url = 'https://listado-personas-21f8c.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url)
      .subscribe(
        response => console.log("Eliminar: " + response)
        ,
        error => console.log("Error al eliminar persona: " + error)
      )
  }
}
