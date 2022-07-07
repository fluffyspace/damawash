import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  opened: boolean = false

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  navigateToHome(): void{
    this._router.navigateByUrl('/');
    this.opened = false;
  }

  navigateToServices(): void{
    this._router.navigateByUrl('/services');
    this.opened = false;
  }

  navigateToPrices(): void{
    this._router.navigateByUrl('/prices');
    this.opened = false;
  }

  navigateToAbout(): void{
    this._router.navigateByUrl('/about');
    this.opened = false;
  }

  navigateToContact(): void{
    this._router.navigateByUrl('/contact');
    this.opened = false;
  }

  goggle(){
    this.opened = !this.opened;
    console.log("test " + this.opened);

  }

  w3_open() {
    this.opened = true;
    console.log("haha");
  }
  
  w3_close() {
    this.opened = false;
  }

}
