import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,} from '@angular/animations';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
   trigger('sideBar', [
      // ...
      state('open', style({
        height: '194px',
        opacity: 1,
        backgroundColor: 'rgb(23,24,32)',
        width:'100vw'
      })),
      state('closed', style({
        height: '0vh',
        opacity: 0.5,
        backgroundColor: 'gray',
        width:'100vw'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.34s')
      ]),
    ]),

  ],
})
export class HeaderComponent implements OnInit {
  name:string='CAIRO';
  sideBar=false;
  isOpen = false;
  preHeader=true;
  constructor() { }

  ngOnInit() {
  }

  animation(){
    this.sideBar=!this.sideBar;
    this.isOpen=!this.isOpen;
  }

  preHeaderHidden(){
    this.preHeader=!this.preHeader;
  }

}

