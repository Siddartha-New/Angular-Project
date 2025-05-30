import { Component, OnInit } from "@angular/core";
import { httpservice } from "../../host/httpservice";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
})
export class InventoryComponent implements OnInit {
  
  inventoryItems: any[] = [];
    selectedImageFile: any;
    previewImage: string | ArrayBuffer | null = '';
  constructor(private service: httpservice) { }

  ngOnInit() {
  }
  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file); // base64
    }
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
      image: this.previewImage || null
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

