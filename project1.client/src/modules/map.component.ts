import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { loadModules } from "esri-loader/dist/esm/modules";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html', // Ensure the correct file name
})
//export class MapComponent implements OnInit {
//  @ViewChild('mapViewDiv', { static: true }) private mapViewEl!: ElementRef;

//  location1: string = '';  // First location input
//  location2: string = '';  // Second location input
//  distance: number | null = null; // Distance in kilometers
//  mapView: any;
//  graphicsLayer: any;
 

//   async ngOnInit() {
//    const [Map, MapView, GraphicsLayer] = await loadModules([
//      'esri/Map',
//      'esri/views/MapView',
//      'esri/layers/GraphicsLayer'
//    ]);

//    const map = new Map({ basemap: 'streets-navigation-vector' });
//    this.mapView = new MapView({
//      container: this.mapViewEl.nativeElement,
//      map: map,
//      center: [78.9629, 20.5937],
//      zoom: 5
//    });

//    this.graphicsLayer = new GraphicsLayer();
//    map.add(this.graphicsLayer);
//  }

//  async findDistance() {

//    if (!this.location1 || !this.location2) {
//      alert('Enter both locations.');
//      return;
//    }

//    const [Locator, Graphic] = await loadModules([
//      'esri/rest/locator',
//      'esri/Graphic'
//    ]);

//    const locatorUrl = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";

//    // Find coordinates for both locations
//    const results1 = await Locator.addressToLocations(locatorUrl, { address: { SingleLine: this.location1 } });
//    const results2 = await Locator.addressToLocations(locatorUrl, { address: { SingleLine: this.location2 } });

//    if (results1.length === 0 || results2.length === 0) {
//      alert("One or both locations not found.");
//      return;
//    }

//    const loc1 = results1[0].location;
//    const loc2 = results2[0].location;

//    this.graphicsLayer.removeAll(); // Remove old markers

//    // Add markers for both locations
//    const addMarker = (longitude: number, latitude: number, color: string) => {
//      const pointGraphic = new Graphic({
//        geometry: { type: "point", longitude, latitude },
//        symbol: { type: "simple-marker", color, size: "12px" }
//      });
//      this.graphicsLayer.add(pointGraphic);
//    };

//    addMarker(loc1.x, loc1.y, "blue"); 
//     addMarker(loc2.x, loc2.y, "red"); 

//     const lineGraphic = new Graphic({
//       geometry: {
//         type: "polyline",
//         paths: [[loc1.x, loc1.y], [loc2.x, loc2.y]]
//       },
//       symbol: {
//         type: "simple-line",
//         color: "green", 
//         width: 3
//       }
//     });

//     this.graphicsLayer.add(lineGraphic); 

//    // Calculate distance using Haversine formula
//    this.distance = this.calculateDistance(loc1.y, loc1.x, loc2.y, loc2.x);

//    // Adjust map view to fit both locations
//    this.mapView.goTo({ center: [(loc1.x + loc2.x) / 2, (loc1.y + loc2.y) / 2], zoom: 4 });
//  }

//  // Haversine formula to calculate distance in km
//  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
//    const toRad = (angle: number) => (angle * Math.PI) / 180;
//    const R = 6371; // Radius of Earth in km

//    const dLat = toRad(lat2 - lat1);
//    const dLon = toRad(lon2 - lon1);

//    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
//      Math.sin(dLon / 2) * Math.sin(dLon / 2);
//    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//    return R * c;
//  }


  
//}

export class DashBoardComponent implements OnInit {
  @ViewChild("mapViewDiv", { static: true }) private mapViewEl!: ElementRef;

  mapView: any;
  graphicsLayer: any;
  busGraphic: any;
  busRoute = [
    { lat: 20.5937, lon: 78.9629 },
    { lat: 20.5950, lon: 78.9700 },
    { lat: 20.6000, lon: 78.9800 },
    { lat: 20.6100, lon: 78.9900 }, 
  ];
  index = 0;
   
  async ngOnInit() {
    const [Map, MapView, GraphicsLayer, Graphic] = await loadModules([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/GraphicsLayer",
      "esri/Graphic",
    ]);

    const map = new Map({ basemap: "streets-navigation-vector" });
    this.mapView = new MapView({
      container: this.mapViewEl.nativeElement,
      map: map,
      center: [78.9629, 20.5937],
      zoom: 10,
    });

    this.graphicsLayer = new GraphicsLayer();
    map.add(this.graphicsLayer);

    this.busGraphic = new Graphic({
      geometry: { type: "point", longitude: this.busRoute[0].lon, latitude: this.busRoute[0].lat },
      symbol: {
        type: "simple-marker", color: "Green", size: "12px", Symbol:"D:\Sample Poc's\Project1\project1.client\src\assets\bus.png"},
    });
  
    this.graphicsLayer.add(this.busGraphic);
    this.trackBus();
  }

  trackBus() {
    setInterval(() => {
      if (this.index < this.busRoute.length - 1) {
        this.index++;
        this.updateBusLocation(this.busRoute[this.index].lat, this.busRoute[this.index].lon);
      }
    }, 1000); // Moves every 3 seconds
  }

  updateBusLocation(lat: number, lon: number) {
    this.busGraphic.geometry = { type: "point", longitude: lon, latitude: lat };
    this.mapView.goTo({ center: [lon, lat], zoom: 12 });
  }
}

