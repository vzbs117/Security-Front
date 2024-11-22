import { Component } from '@angular/core';

@Component({
  selector: 'app-validator-url',
  templateUrl: './validator-url.component.html',
  styleUrls: ['./validator-url.component.css'], // Corregido (de styleUrl a styleUrls)
})
export class ValidatorUrlComponent {
  isLoading: boolean = false;
  url: string = ''; // Modelo enlazado al campo de entrada
  validationMessage: string | null = null; // Mensaje de validación

  constructor() {}

  onValidate(): void {
    if (!this.url) {
      this.validationMessage = 'Por favor, ingresa una URL válida.';
      return;
    }

    this.isLoading = true;
    this.validationMessage = null;

    // Simulación de tiempo de validación (simula backend)
    setTimeout(() => {
      this.isLoading = false;

      // Ejemplo: Resultado de validación
      const isPhishing = Math.random() > 0.5;
      this.validationMessage = isPhishing
        ? 'La URL podría ser peligrosa. ¡Ten cuidado!'
        : 'La URL parece segura.';
    }, 3000);
  }
}
