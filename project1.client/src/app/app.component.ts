import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Host } from '../host/hosting';
import { MapComponent } from '../modules/map.component';

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
  constructor(private http: HttpClient, private route: Router, private hostservice: Host) { }

  ngOnInit() {
  }



  mapfun() {
    let data = this.hostservice.Fetch("", "payload", "fetch");
    if (data != null) {
      this.list = data;
    }
    //this.route.navigate(["map"]);
    //this.disable = true;
  }
}
