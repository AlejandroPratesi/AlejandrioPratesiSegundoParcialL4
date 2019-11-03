import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServicio: UserService) { }

  ngOnInit() {
  }


  onLogin(){

    console.log(this.userServicio);

  }

  onRegister(){

  }

}
