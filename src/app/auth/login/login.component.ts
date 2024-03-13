import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router ) { }

  onSubmit(): void {
    console.log('Connexion demandée', this.user);
    // Ici, vous appellerez votre service d'authentification pour inscrire l'utilisateur
    this.router.navigate(['/']);
  }
}