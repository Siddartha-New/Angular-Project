import { Component, OnInit } from "@angular/core";
import { httpservice } from "../../host/httpservice";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {
  
  inventoryItems: any[] = [];
  constructor(private service: httpservice) { }

  ngOnInit() {
  }
  
  Fetch() {
    var response = this.service.Search("Ecommerceservice", 'empty', "Search");
    if (response != undefined) {
      let data = JSON.parse(response);
      this.inventoryItems.push(data);
    }
  }
  addItem(itemName: string, price: string,quantity:string) {
    if (!itemName || !price) return;

    const newItem = {
      name: itemName.trim(),
      price: parseFloat(price),
      quantity: quantity,
    };

    this.inventoryItems.push(newItem);
    var payload = JSON.stringify(this.inventoryItems)
    var response = this.service.Insert("InventoryService", payload, "insert");
    if (response != null) {
      itemName = '';
      price = '';
      alert("Product is Updated!")
    }
  }

  removeItem(index: number) {
    this.inventoryItems.splice(index, 1);
    var payload = JSON.stringify(index);
    var response = this.service.Delete("CommponetClass", payload, "Delete");
  }
}

