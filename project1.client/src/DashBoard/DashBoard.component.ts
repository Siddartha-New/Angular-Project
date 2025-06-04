import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-DashBoard',
  templateUrl: './DashBoard.component.html',
  styleUrls: ['./DashBoard.component.css']
})
export class DashBoardComponent {
  hidePassword = true;
  loading = false;
  loginError: string | null = null;
    menus: any;
    disable: boolean = false;

  constructor(private route: Router) {

  }
  ngOnInit() {
    this.menuslist();
  }

  menuslist() {
    this.menus = [
       { title: 'Map', url: '/map', icon: 'assets/bus.png' },
      //{ title: 'Chat', url: '/chat', icon: 'assets/robot.png' },
      { title: 'Shoping', url: '/ecommerce', icon: 'assets/ecommerceimg.jpg' },
      { title: 'Inventory', url: '/inventory', icon: 'assets/inventory.png' },
    ];
  }
  onLogin() {

  }
  Tabclick(event: any) {
    if (event != undefined) {
      this.disable = true;
      this.route.navigate([event]);
    }

  }
}
