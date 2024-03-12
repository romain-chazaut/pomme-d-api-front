import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ajoutez cette ligne
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component'; 
import { RouterModule, Routes } from '@angular/router'; 


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent // Déclarez votre composant ici
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule// Ajoutez FormsModule ici
    // autres modules importés
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
