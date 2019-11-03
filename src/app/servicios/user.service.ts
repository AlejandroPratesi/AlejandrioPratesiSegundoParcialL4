import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getUser(){

  }

  setToken(token){
  localStorage.setItem("token",token);
  }
}
