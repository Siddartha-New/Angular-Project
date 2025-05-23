import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { httpservice } from '../host/httpservice';
import { MapComponent } from '../modules/map/map.component';


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  disable: boolean = false
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  list: any;
  menus: any;
  email: string = '';
  password: string = '';
  constructor(private http: HttpClient, private route: Router, private hostservice: httpservice) { }

  ngOnInit() {
    this.menuslist();
  }
  menuslist() {
    this.menus = [
      { title: 'Map', url: '/map', icon: 'assets/bus.png' },
      { title: 'Chat', url: '/chat', icon: 'assets/robot.png' },
      { title: 'Shoping', url: '/ecommerce', icon: 'assets/ecommerceimg.jpg' },
      { title: 'Inventory', url: '/inventory', icon: 'assets/inventory.png' },
    ];
  }
  onLogin() {

  }
  Tabclick(event: any) {
    /* this.mapfun();*/
    if (event != undefined) {
      this.disable = true;
      this.route.navigate([event]);
    }

  }
  mapfun() {
    let data1 = this.hostservice.Fetch("insert", "payload", "fetch");
    if (data1 != null) {

      this.list = data1;
    }
    //this.route.navigate(["map"]);
    //this.disable = true;
  }

}
