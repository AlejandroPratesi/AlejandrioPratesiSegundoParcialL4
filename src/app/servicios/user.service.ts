import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listadoPaises;

  constructor(private http: HttpClient) { }

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
}
