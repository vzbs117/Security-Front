import { Component } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  patterns = [
    { id: '1', description: 'Intento de fraude detectado', date: '2024-11-01', comment: '' },
    { id: '2', description: 'Acceso no autorizado', date: '2024-11-02', comment: '' },
    { id: '3', description: 'Amenaza de extorsión detectada', date: '2024-11-03', comment: '' }
  ];

  validatePattern(id: string) {
    // Lógica para validar el patrón
    console.log(`Patrón ${id} validado`);
  }

  rejectPattern(id: string) {
    // Lógica para rechazar el patrón
    console.log(`Patrón ${id} rechazado`);
  }

}
