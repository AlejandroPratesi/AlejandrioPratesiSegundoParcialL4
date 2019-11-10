import { Injectable , EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Persona } from '../clases/persona';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listadoPaises;
  personas: Persona[] = [];

  
  saludar = new EventEmitter<number>();

  constructor(private http: HttpClient,
              private dataService: DataService) { }
  

  
 getPaises(){
  this.listadoPaises = this.http.get('https://restcountries.eu/rest/v2/all')
  console.log(this.listadoPaises)
  return this.listadoPaises;
   }
 
   /* 
   getPais(id: number): Observable<Hero> {
     const url = `${this.heroesUrl}/${id}`;
     return this.http.get<Hero>(url).pipe(
       tap(_ => this.log(`fetched hero id=${id}`)),
       catchError(this.handleError<Hero>(`getHero id=${id}`))
     );
   } */
 
   getUser(){
 
   }

   
  setToken(token){
    localStorage.setItem("token",token);
    }
 

  onAgregar(persona:Persona){
   // this.loginServicio.enviarMensajeConsola("Inyectando.." + persona.apellido + ', ' + persona.nombre)
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas)
  }
  
}
