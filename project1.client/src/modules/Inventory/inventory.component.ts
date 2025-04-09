import { Component, OnInit } from "@angular/core";
import { httpservice } from "../../host/httpservice";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {

  constructor(private service: httpservice) { }

  ngOnInit() {
  }
  inventoryItems: any[] = [];

  addItem(itemName: string, price: string) {
    if (!itemName || !price) return;

    const newItem = {
      name: itemName.trim(),
      price: parseFloat(price),
    };

    this.inventoryItems.push(newItem);
    var payload = JSON.stringify(this.inventoryItems)
    var response = this.service.Insert("CommponetClass", payload, "insert");
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

