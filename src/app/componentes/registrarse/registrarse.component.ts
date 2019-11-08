import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Persona } from '../../clases/persona';
import { UserService } from '../../servicios/user.service';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  personas: Persona[] = [];
  nombreInput:string;
  apellidoInput:string;

  constructor(private ServicioUsuario: UserService ,private builder:FormBuilder) {
    this.ServicioUsuario.saludar.subscribe(
      (indice:number) => alert(indice)
    );
   }

  /*  nombre = new FormControl('',[Validators.required]);
   apellido = new FormControl('',[Validators.required]);

   registroFormulario:FormGroup = this.builder.group({
     nombre: this.nombreInput,
     apellido: this.apellidoInput
   }) */

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
