import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-me',
  templateUrl: './know-me.component.html',
  styleUrls: ['./know-me.component.scss']
})
export class KnowMeComponent implements OnInit {

  public displayMoreNutshell: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleMoreNutshell() {
    this.displayMoreNutshell = !this.displayMoreNutshell;
  }

}
