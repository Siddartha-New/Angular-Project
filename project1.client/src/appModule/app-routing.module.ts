import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from '../modules/map.component';


const routes: Routes = [
  { path: 'map', component: MapComponent },  // Route for MapComponent
  { path: '', redirectTo: '', pathMatch: 'full' } // Redirect to map by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
