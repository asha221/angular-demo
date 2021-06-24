import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   myFunction(x:any) {
    x.classList.toggle("fa-thumbs-down");
  }
  isDarkTheme=true;

  toggleTheme(){
    this.isDarkTheme=!this.isDarkTheme;
    }
}
