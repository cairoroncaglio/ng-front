import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  
  constructor(public dialogRef:MatDialogRef<DialogDeleteComponent>,  
    @Inject(MAT_DIALOG_DATA) public data:any){

    }
  

  ngOnInit() {
  }
  closeDeleteDialog(){
    this.dialogRef.close("Operação cancelada.")
  }

  

}
