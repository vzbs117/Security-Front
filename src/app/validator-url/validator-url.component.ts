import { Component } from '@angular/core';

@Component({
  selector: 'app-validator-url',
  templateUrl: './validator-url.component.html',
  styleUrl: './validator-url.component.css'
})
export class ValidatorUrlComponent {

  url: string = ''; // Modelo enlazado al campo de entrada
  validationMessage: string | null = null; // Mensaje de validación


  constructor(){}

  onValidate(): void{
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // Protocolo (http o https)
      '((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|' + // Dominio
      'localhost|' + // Localhost
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // Dirección IP
      '(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$' // Puerto y/o ruta
    );

    if (this.url.trim() === '') {
      this.validationMessage = 'Por favor, ingresa una URL.';
    } else if (urlPattern.test(this.url)) {
      this.validationMessage = '✅ La URL ingresada es válida.';
    } else {
      this.validationMessage = '❌ La URL ingresada no es válida. Verifica el formato.';
    }
  }

}
