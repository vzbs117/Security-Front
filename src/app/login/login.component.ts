import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string='';
  password:String='';
  loginError:string|null=null;
  
  constructor(private authService: AuthService){}

  ngOnInit():void{}


  onSubmit(): void {
    
  }

}
