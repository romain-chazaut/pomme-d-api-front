import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products: any[] = [];
  selectedProduct: any = null;
  isModalVisible: boolean = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    // Générer 30 produits
    for (let i = 1; i <= 30; i++) {
      this.products.push({
        id: i,
        name: `Produit ${i}`,
        description: `Description du Produit ${i}`,
        price: Math.round(Math.random() * 100) + 10
      });
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  openProductModal(product: any) {
    console.log('Ouverture de la modal avec le produit :', product);
    this.selectedProduct = product;
    this.isModalVisible = true;
    this.cdr.detectChanges(); // Force la détection de changements après la mise à jour
    console.log('Modal should be visible now');
  }

  closeModal() {
    this.isModalVisible = false;
    this.selectedProduct = null;
    this.cdr.detectChanges(); // Optionnel ici, surtout si la fermeture de la modal ne change pas d'autres données
    console.log('Modal should be hidden now');
  }
}
