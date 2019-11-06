import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Persona } from '../../clases/persona';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  personas: Persona[] = [];
  nombreInput:string;
  apellidoInput:string;

  constructor(private ServicioUsuario: UserService ) {
    this.ServicioUsuario.saludar.subscribe(
      (indice:number) => alert(indice)
    );
   }

  ngOnInit() {
    this.personas = this.ServicioUsuario.personas;
  }

  onAgregarPersona(){
    console.log("Agregando...")
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    console.log(persona1)
    this.ServicioUsuario.onAgregar(persona1);
  }


}
