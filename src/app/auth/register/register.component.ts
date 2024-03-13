import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  onSubmit(): void {
    console.log('Inscription demandée', this.user);
    // Ici, vous appellerez votre service d'authentification pour inscrire l'utilisateur
    this.router.navigate(['/login']);
  }
}
