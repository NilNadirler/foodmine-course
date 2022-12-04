import { AuthGuard } from './auth/guards/auth.guard';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
