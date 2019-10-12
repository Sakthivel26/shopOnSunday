import { AdminGuardService } from './admin-guard.service';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthServiceService } from './auth-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyordersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent },
      {path: 'login', component: LoginComponent },
      {path: 'shopping-cart', component: ShoppingCartComponent },

      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path: 'my-orders', component: MyordersComponent, canActivate: [AuthGuardService]},
      {path: 'order-success', component: OrderSuccessComponent , canActivate: [AuthGuardService]},
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminGuardService]},
      {path: 'admin/orders', component: AdminOrdersComponent,  canActivate: [AuthGuardService, AdminGuardService]}

    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [AuthServiceService, AuthGuardService, UserService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }


