import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AP';

  constructor(){

  }

  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyC9U8iZ8StfmwfcE1mm3IKX0MfZUEMH4JU",
      authDomain: "listado-personas-21f8c.firebaseapp.com",
    })
  }  
}
