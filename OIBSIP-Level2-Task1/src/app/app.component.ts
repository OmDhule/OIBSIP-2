import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  degree: number=0;
  temper: number =0;
  status:string="";


  convert(value: string):void{
    if(value=="Farenheit"){
    this.temper = (this.degree- 32) * 5/9;
    this.status = "Celsius";
  }else if(value=="Celcius"){
    this.temper = (this.degree*1.8)+32;
    this.status = "Farenheit";
  }
  }
}
