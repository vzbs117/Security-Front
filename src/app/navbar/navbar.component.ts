import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  navbarOpen: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    // Suscribirse al estado de autenticación
    this.authService.isAuthenticated.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  

}
