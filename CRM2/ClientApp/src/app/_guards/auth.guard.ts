import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/_auth/auth.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router,private alertify: AlertifyService) { }
  canActivate(): boolean {
    
    if (this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    this.alertify.error("Nie masz uprawnien");
    return false;

  }

  
  
}
