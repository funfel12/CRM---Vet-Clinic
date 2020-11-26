import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/_auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  model: any = {};

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log("Zalogowałeś się do aplikacji");
    }, error => {
      console.log("Wystąpił błąd logowania");
      });
  }
}
