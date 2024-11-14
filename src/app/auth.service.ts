import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl='http://localhost:5000/api/auth';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);


  constructor(private http:HttpClient) {
    // Aquí puedes verificar si el usuario está logueado, por ejemplo, revisando un token.
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      this.isAuthenticatedSubject.next(true);
    }
  }
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(email:string, password:string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,{email,password}).pipe(
      tap((response)=>{
        if(response.token){
          localStorage.setItem('token',response.token);
        }
      })
    );      
  }

  isLoggedId():boolean{
    return !!localStorage.getItem('token');
  }

  logout() {
    // Aquí pones la lógica para logout, eliminando el token
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject.next(false);
  }

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getToken(): string| null{
    return localStorage.getItem('authToken');
  } 
}
