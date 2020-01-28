import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('optionsMaxMin', [
       // ...
       state('open', style({
         height: '90%',
         backgroundColor: 'whitesmoke',
         width:'41%'
       })),
       state('closed', style({
         height: '75%',
        backgroundColor: 'white',
        width:'35%'
        
         
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
export class LoginComponent implements OnInit {
  option6=false;
  constructor() { }

  ngOnInit() {
  }

}
