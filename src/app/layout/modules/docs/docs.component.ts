import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
}
