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
  
  images: string[] = ['before_after1.jpg', 'before_after2.jpg', 'before_after3.jpg'];

  ngOnInit(): void {
    interval(3000).subscribe(() => this.carousel())
  }

  slideIndex = 0;

  carousel(): void {
    this.slideIndex++;
    if (this.slideIndex >= 3) {this.slideIndex = 0}
    if(this.image){
      this.image.nativeElement.src = 'assets/images/' + this.images[this.slideIndex];
    }
  }

}
