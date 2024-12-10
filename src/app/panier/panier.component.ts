import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  standalone : false
})
export class PanierComponent implements OnInit {

  cart: any[] = []; // Liste des produits du panier
  totalPrice: number = 0; // Prix total du panier

  ngOnInit(): void {
    // Charger le panier depuis localStorage au démarrage
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
    this.calculateTotalPrice();
  }

  /**
   * Supprimer un article du panier
   * @param index l'index de l'article à supprimer
   */
  removeFromCart(index: number): void {
    this.cart.splice(index, 1); // Supprime l'article à l'index donné
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Met à jour le localStorage
    this.calculateTotalPrice(); // Recalculer le prix total
  }

  /**
   * Calculer le prix total des articles du panier
   */
  calculateTotalPrice(): void {
    this.totalPrice = this.cart.reduce((total, item) => total + item.price, 0);
  }

  /**
   * Vider tout le panier
   */
  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart'); // Supprime le panier du localStorage
    this.totalPrice = 0;
  }
}