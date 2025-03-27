import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Host } from '../host/hosting';
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
  disable :boolean =  false
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  list: any;
  menus: any;
  constructor(private http: HttpClient, private route: Router, private hostservice: Host) { }

  ngOnInit() {
    this.menus = [
     /* { title: 'Dashboard', url: '/dashboard', icon: 'assets/bus.png' },*/
      { title: 'Map', url: '/map', icon: 'assets/bus.png' },
      { title: 'Chat', url: '/chat', icon: 'assets/bus.png' }
    ];
  }


  Tabclick(event: any)
  {
   /* this.mapfun();*/
    if (event != undefined)
    {
      this.disable = true;
      this.route.navigate([event]);
    }

  }
  mapfun() {
    let data1 = this.hostservice.Fetch("insert", "payload", "fetch");
    if (data1 != null)
    {

      this.list = data1;
    }
    //this.route.navigate(["map"]);
    //this.disable = true;
  }

}
