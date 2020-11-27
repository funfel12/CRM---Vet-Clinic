import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/_auth/auth.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService) { }



  model: any = {};

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.sucess("Logowanie udane!")
    }, error => {
        this.alertify.error("Wystąpił błąd logowania!");
      });
  }
  loggedIn() {
    return this.authService.loggedIn()
  }

  logout() {

    localStorage.removeItem('token');
    console.log('Zostałeś wylogowany');
  }

}
