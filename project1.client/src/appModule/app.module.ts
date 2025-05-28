import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { chatbotComponent } from '../modules/ChatBot/chatbot.component';
import { ecommerceComponent } from '../modules/E-commerce/ecommerce.component';
import { MapComponent } from '../modules/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CartDialogComponent } from '../modules/E-commerce/cart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { InventoryComponent } from '../modules/Inventory/inventory.component';
import { TextBoxComponent } from '../controls/textboxes/text-box.component';
import { CloseBtnComponent } from '../controls/Buttons/close-btn/close-btn.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { DashBoardComponent } from '../DashBoard/DashBoard.component';







const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'chat', component: chatbotComponent },
  { path: 'ecommerce', component: ecommerceComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'app', component: AppComponent }, 
  // Route for MapComponent
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DashBoardComponent,
    chatbotComponent,
    ecommerceComponent,
    CartDialogComponent,
    TextBoxComponent,
    InventoryComponent,
    CloseBtnComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,// <-- REQUIRED for Material dialogs to animate,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
