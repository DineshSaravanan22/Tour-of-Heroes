import { Component,OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private resto:RestoService){}

  ngOnInit(){
   this.resto.sinUp();
  }

}
