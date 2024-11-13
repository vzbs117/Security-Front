import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName: string = 'usuario';  // Cambiar al nombre del usuario autenticado
  detectedPatterns: number = 12;  // Número de patrones detectados en la última semana
  pendingAlerts: number = 5;  // Número de alertas pendientes
  validatedPatterns: number = 30;  // Número de patrones validados en el mes

}
