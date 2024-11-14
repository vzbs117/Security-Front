import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerData={
    name:'',
    email:'',
    password:''
  };

  constructor(private authService:AuthService){}

  onRegister(): void{
    this.authService.registerUser(this.registerData).subscribe(
      response=>{
        console.log('Usuario resgistrado con exito',response);
      },
      error=>{
        console.error('Error al resgistrar el usuario:',error);
        
      }
    );
  }

  
  
 

}
