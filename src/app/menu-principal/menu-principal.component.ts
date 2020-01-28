import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,} from '@angular/animations';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
  animations: [
    trigger('optionsMaxMin', [
       // ...
       state('open', style({
         height: '100%',
         backgroundColor: 'rgba(64, 147, 180,0.3)',
         width:'30%'
       })),
       state('closed', style({
         height: '90%',
        backgroundColor: 'white',
        width:'23%'
        
         
       })),
       transition('open => closed', [
         animate('0.2s')
       ]),
       transition('closed => open', [
         animate('0.2s')
       ]),
     ]),
 
   ],
})
export class MenuPrincipalComponent implements OnInit {
option1=false;
option2=false;
option3=false;
option4=false;
option5=false;
option6=false;
  constructor() { }

  ngOnInit() {
  }
  

}
