import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component'; 
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './products/home-page/home-page.component';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { RouterModule, Routes } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
