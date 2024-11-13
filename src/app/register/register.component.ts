import { Component } from '@angular/core';

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
  onSubmit(){
    if(this.registerData.name&&this.registerData.email&&this.registerData.password)
      console.log('Datos del formulario:',this.registerData);
  }

}
