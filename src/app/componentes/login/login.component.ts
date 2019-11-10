import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServicio: UserService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    console.log("Logueando...");
    const email = form.value.email;
    const password = form.value.password;

  }


}
