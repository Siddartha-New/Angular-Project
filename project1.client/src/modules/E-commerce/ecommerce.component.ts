import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { loadModules } from "esri-loader/dist/esm/modules";
import {httpservice } from "../../host/httpservice";
import { response } from "../../models/response";
import { CartDialogComponent } from "./cart-dialog.component";


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})

export class ecommerceComponent implements OnInit {
  payload: response [] = [];
  openbox: boolean = false;
  products : any = [];
  searchparameter: string = '';
  value: string = '';
  cart: any[] = [];
  enable: boolean = false;
    image: any;
  constructor(private service: httpservice, private dialog: MatDialog) { }
  ngOnInit() {
  }
  inputchange(event:any) {
    this.value = event.target.value;
   
  }
  search() {
    this.enable = true;
    if (this.value != null && this.value != '') {
      this.products = [];
      var response = this.service.Search("Ecommerceservice", this.value, "Search");
      if (response != undefined) {
        let data = JSON.parse(response);
        this.products.push(data);
      }
    }
    else {
      var response = this.service.Search("Ecommerceservice", 'empty', "Fetchall");
      if (response != undefined) {
        let data = JSON.parse(response);
        this.products = data;
      }
    }
  }

  addToCart(product: any) {
    this.cart.push(product);
  }
  opencart() {
    this.dialog.open(CartDialogComponent, {
      data: { cartItems: this.cart },
      width: '100%',
      height:'100%'
    });
  }
}


