import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { log } from 'console';
import { PassThrough } from 'stream';
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
  username: string = '';
  password: string = '';
  loginsession: any = [];
    enableregister: boolean = false;
  constructor(private http: HttpClient, private route: Router, private hostservice: httpservice) { }
  ngOnInit() {

  }

  onLogin(event: any) {
    const obj = {
      username: this.username,
      password: this.password,
    };
    this.loginsession.push(obj)
    var payload = JSON.stringify(this.loginsession)

    if (event == "register") {
      this.hostservice.Insert('LoginSession', payload, 'insert')
      this.username = "";
      this.password = "";
      this.enableregister = false;
      alert('Register Successful!');
  
    }
    if (event == "login") {
      var dta = this.hostservice.Fetch('LoginSession', payload, 'Fetchall')
      if (dta == "Data Found")
      {
        this.username = "";
        this.password = "";
        this.disable = true;
        alert('Logged in successfully!');
        this.route.navigate(['dashboard']);
      }
      else {
        alert('Logged in Failed!');
      }
    }



  }
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  trigger() {
    this.enableregister = true;
  }


}
