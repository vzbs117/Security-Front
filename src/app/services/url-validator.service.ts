import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlValidatorService {
  private apiUrl = 'http://localhost:5000/api/consultar'; // URL de la API backend

  constructor(private http: HttpClient) {}

  // Método para validar la URL
  validateUrl(url: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { url });
  }
}
