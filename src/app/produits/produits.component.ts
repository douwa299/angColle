import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  standalone : false
})
export class ProduitsComponent {
  products = [
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/tops.jpg',
      isNew: true
    },
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/shoes.jpg',
      isNew: true
    },
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/sweaters.jpg',
      isNew: true
    },
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/outerwear.jpg',
      isNew: true
    },
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/jeans.jpg',
      isNew: false
    },
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/dresses.jpg',
      isNew: true
    },
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/card1.jpg',
      isNew: true
    },
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/card2.jpg',
      isNew: true
    },
    {
      name: 'Blazer en mélange de laine recyclée',
      price: 150.50,
      description: 'Blazer en mélange de laine recyclée pour femme, almost sold out.',
      imgUrl: 'images/Card3.jpg',
      isNew: true
    }
  ];
  cart: any[] = []; 
  addToCart(product: any): void {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    alert(`${product.name} a été ajouté au panier !`);
  }


}




