import { LoginComponent } from './login/login.component';
import { AddFornecedorComponent } from './add-fornecedor/add-fornecedor.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HeaderComponent,
  children: [{
    path: '', component: MenuPrincipalComponent}]},
    {path: 'home/fornecedores', component: HeaderComponent,
  children: [{
    path: '', component: FornecedoresComponent}]},
    {path: 'add-fornecedor', component: AddFornecedorComponent}
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
