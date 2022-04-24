import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss']
})
export class SnippetsComponent implements OnInit {

  public displayPassion: boolean = false;
  public displayResponsive: boolean = false;
  displaySecurity: boolean;
  displayVariety: boolean;
  displayDream: boolean;

  constructor() { }

  ngOnInit() {
  }

  public togglePassion() {
    this.displayPassion = !this.displayPassion;
  }
  public toggleResponsive() {
    this.displayResponsive = !this.displayResponsive;
  }
  public toggleSecurity() {
    this.displaySecurity = !this.displaySecurity;
  }
  public toggleVariety() {
    this.displayVariety = !this.displayVariety;
  }
  public toggleDream(){
    this.displayDream = !this.displayDream;
  }
}
