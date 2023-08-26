import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  username: string  | undefined;
  password: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log("Nombre de usuario : ",this.username)
    console.log("Contraseña : ",this.password)
    


  }

}
