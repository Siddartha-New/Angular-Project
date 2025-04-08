import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
})
export class CartDialogComponent {
  totalPrice: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.calculateTotal();
  }
  removeItem(index: number) {
    this.data.cartItems.splice(index, 1); // Remove the item at that index
    this.calculateTotal(); // Recalculate total after removal
  }

  calculateTotal() {
    this.totalPrice = this.data.cartItems.reduce((sum: number, item: any) => {
      return sum + item.price;
    }, 0);
  }
}
