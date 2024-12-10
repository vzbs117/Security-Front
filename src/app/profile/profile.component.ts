import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],  // Arreglo 'styleUrls' con la "s" en plural
})
export class ProfileComponent implements OnInit {
  userProfile: any = null;  // Datos del perfil del usuario
  loading: boolean = true;   // Indicador de carga
  error: string | null = null; // Mensaje de error en caso de fallo

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Nos suscribimos al BehaviorSubject para obtener el perfil del usuario
    this.authService.userProfile.subscribe(
      (data) => {
        if (data) {
          this.userProfile = data;  // Asignamos los datos del perfil
        } else {
          this.error = 'Perfil no encontrado. Por favor, intenta nuevamente más tarde.';
        }
        this.loading = false;  // Terminamos la carga
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario', error);
        this.error = 'Hubo un problema al cargar tu perfil. Intenta nuevamente más tarde.';  // Mostramos mensaje de error
        this.loading = false;  // Terminamos la carga
      }
    );
  }
}
