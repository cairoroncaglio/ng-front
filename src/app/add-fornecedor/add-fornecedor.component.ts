import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-add-fornecedor',
  templateUrl: './add-fornecedor.component.html',
  styleUrls: ['./add-fornecedor.component.css']
})
export class AddFornecedorComponent implements OnInit {
  public celularMask = ['(',/[1-9]/,/\d/, ')', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public cnpjMask = [/[1-9]/, /\d/,'.',/\d/, /\d/, /\d/,'.',/\d/,/\d/,/\d/,'/', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/];
  cnpj:string;
  telefone:string;
  nomeFantasia:string;
  razaoSocial:string;
  email:string;

  constructor(public dialogRef:MatDialogRef<AddFornecedorComponent>,  
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  clearFields(){
    this.cnpj='';
    this.email='';
    this.telefone='';
    this.nomeFantasia='';
    this.razaoSocial='';

  }
  closeDialogAddFornecedor(){
    this.dialogRef.close("Operação cancelada");
  }
 
}
