import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AdminPanelComponent } from './components/admin-layout/admin-panel/admin-panel.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AdminAddProductComponent } from './components/admin-layout/admin-add-product/admin-add-product.component';
import { AdminAddUserComponent } from './components/admin-layout/admin-add-user/admin-add-user.component';
import { AdminProductComponent } from './components/admin-layout/admin-product/admin-product.component';
import { AdminUsersComponent } from './components/admin-layout/admin-users/admin-users.component';
import { AdminGeneralComponent } from './components/admin-layout/admin-general/admin-general.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent },
  {
    path: 'login',
    component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    children:[
      {path: 'users', component: AdminUsersComponent},
      {path: 'add-user', component: AdminAddUserComponent},
      {path: 'products', component: AdminProductComponent},
      {path: 'add-product', component: AdminAddProductComponent},
      {path: '', component: AdminGeneralComponent}

    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
