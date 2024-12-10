import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/users';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  private userProfileSubject = new BehaviorSubject<any>(null); // Para guardar el perfil del usuario

  constructor(private http: HttpClient) {}

  // Método para verificar si el token está presente en localStorage
  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Registrar usuario
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      tap(response => {
        // Aquí podrías manejar el éxito, por ejemplo, loguear el registro exitoso
        console.log('Registro exitoso:', response);
      }),
      catchError((error) => {
        console.error('Error en el registro:', error);
        return throwError(error);  // Propagar error
      })
    );
  }

  // Login de usuario
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          this.isAuthenticatedSubject.next(true);  // Actualizar el estado de autenticación
          this.getUserProfile(); // Obtener perfil del usuario después de iniciar sesión
        }
      }),
      catchError((error) => {
        console.error('Error de login:', error);
        return throwError(error);  // Propagar error
      })
    );
  }

  // Verificar si el usuario está logueado
  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Logout del usuario
  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
    this.userProfileSubject.next(null);  // Limpiar perfil de usuario al hacer logout
  }

  // Obtener el estado de autenticación
  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Obtener el token de autenticación
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Obtener el perfil del usuario
  getUserProfile(): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    this.http.get<any>(`${this.apiUrl}/profile`, { headers }).pipe(
      tap((profile) => {
        this.userProfileSubject.next(profile);  // Guardar el perfil del usuario
      }),
      catchError((error) => {
        console.error('Error al obtener el perfil:', error);
        return throwError(error);  // Propagar error
      })
    ).subscribe();
  }

  // Obtener el perfil del usuario como Observable
  get userProfile(): Observable<any> {
    return this.userProfileSubject.asObservable();
  }
}
