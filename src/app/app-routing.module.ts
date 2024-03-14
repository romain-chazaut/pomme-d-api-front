import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './products/home-page/home-page.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { ProductModalComponent } from './products/product-modal/product-modal.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomePageComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', component: ProductModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

