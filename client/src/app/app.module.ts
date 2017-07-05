import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { StoresComponent } from './components/stores/stores.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/users/user/user.component';
import { StoreComponent } from './components/stores/store/store.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateuserComponent } from './components/users/createuser/createuser.component';
import { CustomerComponent } from './components/users/createuser/customer/customer.component';
import { StaffComponent } from './components/users/createuser/staff/staff.component';
import { MainComponent } from './components/main/main.component';
import { StaffEditComponent } from './components/users/user/staff/staff.component';
import { CustomerEditComponent } from  './components/users/user/customer/customer.component';
import { ValidateService} from './services/validate.service';
import { AuthService} from './services/auth.service';
import { AuthGuard} from './guards/auth.guard';
import { UsersService } from './services/users.service';
import { RoleService } from './services/role.service';
import { StoresService } from './services/stores.service';
import { CompanyService } from './services/company.service';
import { CreatestoreComponent } from './components/stores/createstore/createstore.component';
import { RoleComponent } from './components/role/role.component';
import { EditroleComponent } from './components/role/editrole/editrole.component';
import { CreateroleComponent } from './components/role/createrole/createrole.component';
import { CompanyComponent } from './components/company/company.component';
import { CreatecompanyComponent } from './components/company/createcompany/createcompany.component';
import { EditcompanyComponent } from './components/company/editcompany/editcompany.component';
import { BlankComponent } from './components/blank/blank.component';
import { CreateorderComponent } from './components/orders/createorder/createorder.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'roles', component: RoleComponent },
  { path: 'users',     component: UsersComponent, canActivate:[AuthGuard] },
  { path: 'user', component: CreateuserComponent, canActivate:[AuthGuard] },
  { path: 'user/:id', component: UserComponent, canActivate:[AuthGuard]},
  { path: 'create', component: CreateuserComponent, canActivate:[AuthGuard]},
  { path: 'store/:id', component: StoreComponent, canActivate:[AuthGuard] },
  { path: 'createstore', component: CreatestoreComponent, canActivate: [AuthGuard]},
  { path: 'stores',    component: StoresComponent, canActivate:[AuthGuard] },
  { path: 'orders',    component: OrdersComponent, canActivate:[AuthGuard] },
  { path: 'orders/create', component: CreateorderComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'role/:id', component: EditroleComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'company', component: CreatecompanyComponent },
  { path: 'company/:id', component: EditcompanyComponent },
  { path: 'createrole', component: CreateroleComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    StoresComponent,
    OrdersComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    StoreComponent,
    NavmenuComponent,
    HeaderComponent,
    CreateuserComponent,
    StaffComponent,
    CustomerComponent,
    MainComponent,
    StaffEditComponent,
    CustomerEditComponent,
    CreatestoreComponent,
    RoleComponent,
    EditroleComponent,
    CreateroleComponent,
    CompanyComponent,
    CreatecompanyComponent,
    EditcompanyComponent,
    BlankComponent,
    CreateorderComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ValidateService, AuthService, AuthGuard, UsersService,RoleService, CompanyService, StoresService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

