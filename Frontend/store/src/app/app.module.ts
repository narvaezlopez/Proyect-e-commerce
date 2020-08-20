import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AdminPanelComponent } from './components/admin-layout/admin-panel/admin-panel.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SideMenuComponent } from './components/admin-layout/side-menu/side-menu.component';
import { AdminUsersComponent } from './components/admin-layout/admin-users/admin-users.component';
import { AdminAddUserComponent } from './components/admin-layout/admin-add-user/admin-add-user.component';
import { AdminProductComponent } from './components/admin-layout/admin-product/admin-product.component';
import { AdminAddProductComponent } from './components/admin-layout/admin-add-product/admin-add-product.component';
import { AdminGeneralComponent } from './components/admin-layout/admin-general/admin-general.component';
import { EUserService } from './services/e-user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    UserDataComponent,
    CheckoutComponent,
    ProductDetailComponent,
    AdminPanelComponent,
    WishlistComponent,
    ShoppingCartComponent,
    SideMenuComponent,
    AdminUsersComponent,
    AdminAddUserComponent,
    AdminProductComponent,
    AdminAddProductComponent,
    AdminGeneralComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
