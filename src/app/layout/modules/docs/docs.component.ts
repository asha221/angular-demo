import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  sideBarOpen=true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(EventEmitter:any){
    this.sideBarOpen=!this.sideBarOpen;
  }
 
}
