import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { chatbotComponent } from '../modules/ChatBot/chatbot.component';
import { DashBoardComponent } from '../modules/Dashboard/dashBoard.component';
import { MapComponent } from '../modules/map/map.component';

import { AppRoutingModule } from './app-routing.module';




const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'chat', component: chatbotComponent },// Route for MapComponent
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DashBoardComponent,
    chatbotComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule  ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
