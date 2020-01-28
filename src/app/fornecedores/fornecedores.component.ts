import { AddFornecedorComponent } from './../add-fornecedor/add-fornecedor.component';
import { DialogDeleteComponent } from './../dialog-delete/dialog-delete.component';
import { AppComponent } from './../app.component';
import {trigger,state,style,animate,transition,} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css'],
  animations: [
    trigger('addNewFornecedor', [
       // ...
       state('open', style({
         height: '50vh',
         opacity: 1,
         backgroundColor: 'whitesmoke',
         width:'100vw'
       })),
       state('closed', style({
         height: '0vh',
         opacity: 0.5,
         backgroundColor: 'whitesmoke',
         width:'100vw'
       })),
       transition('open => closed', [
         animate('0.4s')
       ]),
       transition('closed => open', [
         animate('0.5s')
       ]),
     ]),
 
   ],
})
export class FornecedoresComponent implements OnInit {
  boxAdicionarFornecedor=false;

  constructor(private dialog:MatDialog) { }

  ngOnInit() {

  }
  
  onDelete(){
    this.dialog.open(DialogDeleteComponent);

  }

  openCloseUpdateFornecedor(){
    this.boxAdicionarFornecedor=!this.boxAdicionarFornecedor;
  }
  openNewFornecedor(){
    this.dialog.open(AddFornecedorComponent);
  }
 
 
 
  }




