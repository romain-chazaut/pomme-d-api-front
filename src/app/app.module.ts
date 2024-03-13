import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ajoutez cette ligne
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component'; 
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent // Déclarez votre composant ici
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,
    AppRoutingModule// Ajoutez FormsModule ici
    // autres modules importés
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
