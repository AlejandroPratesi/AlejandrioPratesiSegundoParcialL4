import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Persona } from '../clases/persona';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  guardarPersonas(personas: Persona[]){

    this.httpClient.put('https://listado-personas-21f8c.firebaseio.com/datos.json',personas)
    .subscribe(
      response => console.log("Resultado Guardar Persona" + response),
      error => console.log("Error al guardar personas: " + error)
      );
  }
}
