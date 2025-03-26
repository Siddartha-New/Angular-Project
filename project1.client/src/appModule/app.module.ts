import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { MapComponent } from '../modules/map.component';
import { AppRoutingModule } from './app-routing.module';




const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' }, // Default route
  { path: 'map', component: MapComponent }, // Map page
  { path: '**', redirectTo: 'weather' } // Redirect unknown routes
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule  ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
