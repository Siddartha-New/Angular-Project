import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { chatbotComponent } from '../modules/ChatBot/chatbot.component';
import { DashBoardComponent,  } from '../modules/map.component';
import { MapComponent } from '../modules/map/map.component';


const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'chat', component: chatbotComponent },// Route for MapComponent
 /* { path: '', redirectTo: '', pathMatch: 'full',component :AppComponent } */// Redirect to map by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
