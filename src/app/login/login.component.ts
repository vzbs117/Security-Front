import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string='';
  loginError:string|null=null;
  
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit():void{}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Guardar el token o redirigir al usuario
        this.router.navigate(['/dashboard']); // Redirigir a la página deseada después de iniciar sesión
      },
      (error) => {
        // Manejar el error
        this.loginError = 'Credenciales incorrectas. Inténtalo de nuevo.';
      }
    );
  }

}
