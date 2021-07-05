import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-docs-header',
  templateUrl: './docs-header.component.html',
  styleUrls: ['./docs-header.component.css']
})
export class DocsHeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

 
}
