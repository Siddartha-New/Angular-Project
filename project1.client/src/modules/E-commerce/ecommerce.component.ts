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
  products : any;
  searchparameter: string = '';
  constructor(private service: httpservice, private dialog: MatDialog) { }
  ngOnInit() {
  //  this.cardetails();
  }

  cardetails() {
    var response = this.service.Fetch("CommponetClass", 'payload', "Update");
    setTimeout(() => {
      if (response != undefined) {
        this.products = JSON.parse(response);
      }
    }, 1000);

  }
  cart: any[] = [];

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


