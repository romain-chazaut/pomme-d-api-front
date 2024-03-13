import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    console.log('Connexion demandée');
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    console.log('Inscription demandée');
    this.router.navigate(['/register']);
  }

  navigateToProfile() {
    console.log('Profil demandé');
    this.router.navigate(['/profile']);
  }
}
