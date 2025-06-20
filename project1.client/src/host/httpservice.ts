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

export class httpservice {
  result: any;
  api = "https://localhost:7126/Host";
  constructor(private http: HttpClient) {

  }

  Fetch(classname: any, obj: any, type: any): any {
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


  Search(classname: any, obj: any, type: any): any {
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

  Delete(classname: any, obj: any, type: any): any {
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

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}


