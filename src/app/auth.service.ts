import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  constructor() {
    // Aquí puedes verificar si el usuario está logueado, por ejemplo, revisando un token.
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  login() {
    // Aquí pones la lógica para login, como la llamada a la API y almacenamiento del token
    localStorage.setItem('authToken', 'some-token');
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    // Aquí pones la lógica para logout, eliminando el token
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
  }

  get isAuthenticated() {
    return this.isAuthenticatedSubject.asObservable();
  }


 
 
}
