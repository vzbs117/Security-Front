import { Component, OnInit } from '@angular/core';
import { UrlValidatorService } from '../services/url-validator.service';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent implements OnInit {

  patterns: any[]=[];
  constructor(private urlValidation: UrlValidatorService){}

  ngOnInit(): void {
      this.urlValidation.getUrls().subscribe((data)=>{
        this.patterns=data;
      });
  }
  

}
