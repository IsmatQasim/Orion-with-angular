import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 isCollapsed = true;
 isActive = true;
 constructor(private router: Router) {}

  isPnrActive() {
    return this.router.url.startsWith('/pnrs') || this.router.url.startsWith('/booking-records');
  }
}

