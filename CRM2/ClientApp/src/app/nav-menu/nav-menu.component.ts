import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { AuthService } from '../_services/_auth/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;



  constructor(private route: Router, private alertify: AlertifyService, private authService: AuthService) {
 
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  logout() {

    localStorage.removeItem('token');
    this.route.navigate(['/login']);
    console.log('Zostałeś wylogowany');
  }
}
