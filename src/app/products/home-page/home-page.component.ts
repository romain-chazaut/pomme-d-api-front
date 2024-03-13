import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products: any[] = [];

  constructor(private router: Router) {
    // Générer 30 produits
    for (let i = 1; i <= 30; i++) {
      this.products.push({
        id: i,
        name: `Produit ${i}`,
        description: `Description du Produit ${i}`,
        price: Math.round(Math.random() * 100) + 10 // Prix aléatoire entre 10 et 110
      });
    }
  }

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
