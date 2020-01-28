import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import {MatDialogModule, MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { AddFornecedorComponent } from './add-fornecedor/add-fornecedor.component';import { NgxMaskModule } from 'ngx-mask'
import {TextMaskModule} from 'angular2-text-mask';
import { LoginComponent } from './login/login.component'


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,MatButtonModule,MatCheckboxModule,
    MatTableModule,TextMaskModule
    
  ],
  declarations: [ AppComponent,
    HeaderComponent,
    MenuPrincipalComponent,
    FornecedoresComponent,
    DialogDeleteComponent,
    AddFornecedorComponent,
    LoginComponent
    
     ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogDeleteComponent]
})



export class AppModule { }
