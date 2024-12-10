import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData = {
    nombre: '',
    email: '',
    password: ''
  };

  loading: boolean = false;    // Indicador de carga
  error: string | null = null;  // Mensaje de error
  successMessage: string | null = null; // Mensaje de éxito

  constructor(private authService: AuthService, private router: Router) {}

  // Método que se ejecuta al enviar el formulario
  onRegister(): void {
    this.loading = true;  // Iniciar carga
    this.error = null;    // Limpiar posibles errores previos
    this.successMessage = null; // Limpiar mensaje de éxito

    // Llamada al servicio para registrar el usuario
    this.authService.registerUser(this.registerData).subscribe(
      (response) => {
        console.log('Usuario registrado con éxito', response);
        this.successMessage = 'Registro exitoso. Por favor, inicia sesión.';  // Mensaje de éxito
        this.loading = false;
        this.router.navigate(['/login']);  // Redirigir a la pantalla de login
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        this.error = error.error.error || 'Hubo un problema al registrar el usuario. Intenta nuevamente más tarde.';  // Mostrar mensaje de error
        this.loading = false;
      }
    );
  }
}
