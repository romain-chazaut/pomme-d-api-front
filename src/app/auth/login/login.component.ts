import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor() { }

  onSubmit(): void {
    console.log('Connexion demandée', this.user);
    // Ici, vous appellerez votre service d'authentification pour inscrire l'utilisateur
  }
}