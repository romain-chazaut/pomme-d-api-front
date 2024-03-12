import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    email: '',
    password: ''
  };

  constructor() { }

  onSubmit(): void {
    console.log('Inscription demandée', this.user);
    // Ici, vous appellerez votre service d'authentification pour inscrire l'utilisateur
  }
}
