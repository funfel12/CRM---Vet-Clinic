import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient)
  {

  }

  jwtHelper = new JwtHelperService();

  baseUrl = 'http://localhost:49913/api/auth/';
  //http://localhost:49913/api/auth/login
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      }));
  }

  loggedIn() {

    const token = localStorage.getItem('token');
    //Gdy coś jest w tokenie !! true gdy nie false
    //If variable token it's empty return false
    //This function get session token and make sure it's user a logged or not.
    return !this.jwtHelper.isTokenExpired(token);


  }
}

