import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'portfolio';
  pages: Array<[string, string]>;
  current: string = "featured";
  year: number = new Date().getFullYear();

  constructor() {

    this.pages = [
      ["Home", "home"],
      ["Featured", "featured"],
      ["Experience", "experience"],
      // ["About", "about"],
      ["Find-Me", "find-me"]
    ];

  }

  ngOnInit() {
  }

}
