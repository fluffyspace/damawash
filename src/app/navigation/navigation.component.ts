import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SeoService } from '../seo.service';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        transform: 'rotate(55deg)'
      })),
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      transition('open => closed', [
        animate('1s ease')
      ]),
      transition('closed => open', [
        animate('0.5s ease-in')
      ]),
    ]),
  ],
})
export class NavigationComponent {

  opened: boolean = false
  animationBool: boolean = false
  
  constructor() { }

  performAnimation(): void{
    this.animationBool = !this.animationBool;
    /*if(this.el !== undefined){
      this.el.nativeElement
      this.rd.removeClass(this.el.nativeElement, 'w3-animate-left');
      this.rd.addClass(this.el.nativeElement, 'w3-animate-left');
    }*/
    //this.changeDetector.markForCheck();
  }

  navigateToHome(): void{
    //this._router.navigateByUrl('/');
    this.opened = false;
    this.performAnimation();
  }

  navigateToServices(): void{
    //this._router.navigateByUrl('/services');
    this.opened = false;
    this.performAnimation();
  }

  navigateToPrices(): void{
    //this._router.navigateByUrl('/prices');
    this.opened = false;
    this.performAnimation();
  }

  navigateToAbout(): void{
    //this._router.navigateByUrl('/about');
    this.opened = false;
    this.performAnimation();
  }

  navigateToContact(): void{
    //this._router.navigateByUrl('/contact');
    this.opened = false;
    this.performAnimation();
  }

  goggle(){
    this.opened = !this.opened;
    //console.log("test " + this.opened);
  }

  w3_open() {
    this.opened = true;
    console.log("haha");
  }
  
  w3_close() {
    this.opened = false;
  }

}
