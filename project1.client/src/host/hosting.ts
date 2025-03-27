import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})

export class Host {
  result: any;
  api = "https://localhost:7126/Map";
  constructor(private http: HttpClient) {

  }

  Fetch(classname:any,obj:any,type:any): any {
    /* <WeatherForecast[]>*/
    try {
      this.http.get(this.api + "?classname=" + classname+"&obj=" + obj + "&type=" + type, httpOptions).subscribe(
        (response) => {
          this.result = response;
        },
        (error) => {
        }
      );
    }
    catch (ex) {
    }
    return this.result;
  }

  Insert(classname: any, obj: any, type: any): any {
    /* <WeatherForecast[]>*/
    try {
      this.http.get(this.api + "?classname=" + classname + "&obj=" + obj + "&type=" + type, httpOptions).subscribe(
        (response) => {
          this.result = response;
        },
        (error) => {
        }
      );
    }
    catch (ex) {
    }
    return this.result;
  }
  Update(classname: any, obj: any, type: any): any {
    /* <WeatherForecast[]>*/
    try {
      this.http.get(this.api + "?classname=" + classname + "&obj=" + obj + "&type=" + type, httpOptions).subscribe(
        (response) => {
          this.result = response;
        },
        (error) => {
        }
      );
    }
    catch (ex) {
    }
    return this.result;
  }
}


