import { CartItem } from './../../../shared/models/cart-item';
import { CartService } from './../../../services/cart.service';
import { Cart } from './../../../shared/models/cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;
  constructor(private cartService:CartService) {
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
   this.cartService.removeFromCart(cartItem.food.id)
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id, quantity);

  }

}
