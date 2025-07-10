import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';
import { DetailsComponent } from './components/detail/details.component';
import { ForgetpasswordComponent } from './components/forget/forgetpassword/forgetpassword.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { OrdersComponent } from './components/orders/orders.component';

export const routes: Routes = [
    {path:'', component:AuthLayoutComponent, canActivate: [logedGuard], 
        children:[
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component:LoginComponent },
            { path: 'register', component:RegisterComponent },
            { path: 'forget', component:ForgetpasswordComponent }
        ]
    },
    {path:'', component:BlankLayoutComponent, canActivate: [authGuard],
        children:[
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component:HomeComponent  },
            { path: 'products', component:ProductComponent  },
            { path: 'cart', component:CartComponent  },
            { path: 'brands', component:BrandsComponent  },
            { path: 'cart', component:CartComponent  },
            { path: 'brands', component:BrandsComponent  },
            { path: 'categories', component:CategoriesComponent  },
            { path: 'details/:id', component:DetailsComponent  },
            { path: 'allorders', component:AllordersComponent  },
            { path: 'orders/:id', component:OrdersComponent  },
        ]
    },
    {path:'**', component:NotfoundComponent}

];
