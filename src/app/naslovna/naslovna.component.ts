import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-naslovna',
  templateUrl: './naslovna.component.html',
  styleUrls: ['./naslovna.component.scss']
})
export class NaslovnaComponent implements OnInit {

  constructor() { }

  @ViewChild('firstimage') image: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('firsttext') text: ElementRef<HTMLInputElement> | undefined;
  
  images: string[] = [
    
    'before_after3.jpg'
  , 'New Project(1).jpg'
  , 'New Project(6).jpg'
  , 'New Project(8).jpg'
  , 'before_after1.jpg'
  , 'before_after2.jpg'
  , 'New Project(2).jpg'
  , 'New Project(3).jpg'
  , 'New Project(4).jpg'
  , 'New Project(5).jpg'
  , 'New Project(7).jpg'
  , 'New Project(9).jpg'
  , 'New Project(10).jpg'
  , 'New Project(11).jpg'
];
  texts: string[] = [];

  ngOnInit(): void {
    interval(2000).subscribe(() => this.carousel())
  }

  slideIndex = 0;

  carousel(): void {
    this.slideIndex++;
    if (this.slideIndex >= this.images.length) {this.slideIndex = 0}
    if(this.image){
      this.image.nativeElement.src = 'assets/images/' + this.images[this.slideIndex];
    }
    if(this.text){
      this.text.nativeElement.textContent = this.texts.length-1 >= this.slideIndex ? this.texts[this.slideIndex] : "";
    }
  }

}
