import { Component } from '@angular/core';
import { UrlValidatorService } from '../services/url-validator.service'; // Importar el servicio

@Component({
  selector: 'app-validator-url',
  templateUrl: './validator-url.component.html',
  styleUrls: ['./validator-url.component.css'],
})
export class ValidatorUrlComponent {
  isLoading: boolean = false;
  url: string = ''; // Modelo enlazado al campo de entrada
  validationMessage: string | null = null; // Mensaje de validación

  constructor(private urlValidatorService: UrlValidatorService) {} // Inyectar el servicio

  onValidate(): void {
    if (!this.url) {
      this.validationMessage = 'Por favor, ingresa una URL válida.';
      return;
    }

    this.isLoading = true;
    this.validationMessage = null;

    // Llamar al servicio para consultar la URL
    this.urlValidatorService.validateUrl(this.url).subscribe(
      (response) => {
        this.isLoading = false;
        this.validationMessage = response.isPhishing
          ? 'La URL podría ser peligrosa. ¡Ten cuidado!'
          : 'La URL parece segura.';
      },
      (error) => {
        this.isLoading = false;
        this.validationMessage = 'Hubo un error al validar la URL.';
        console.error('Error en la validación:', error);
      }
    );
  }
}
