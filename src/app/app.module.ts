import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ajoutez cette ligne
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component'; 
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './products/home-page/home-page.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { RouterModule, Routes } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent,
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
