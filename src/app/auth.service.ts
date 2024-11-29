import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/api/auth';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      catchError((error) => {
        console.error('Error en el registro:', error);
        return throwError(error);  // Propagar error
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          this.isAuthenticatedSubject.next(true);
        }
      }),
      catchError((error) => {
        console.error('Error de login:', error);
        return throwError(error);  // Propagar error
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
  }

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getUserProfile(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get<any>(`${this.apiUrl}/profile`, { headers }).pipe(
      catchError((error) => {
        console.error('Error al obtener el perfil:', error);
        return throwError(error);  // Propagar error
      })
    );
  }
}
