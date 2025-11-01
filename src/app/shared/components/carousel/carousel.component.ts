import { Component, input, OnInit } from '@angular/core';
import { CarouselItem } from '../../interfaces/carousel-item';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  height = input<number>(650);
  isFullScreen = input<boolean>(false);
  items = input<CarouselItem[]>([]);

  public finalHeight: string | number = 0;
  public currentPosition = 0;
  private autoSlideInterval: any;

  constructor() {
    
  }

  ngOnInit(): void {
    this.items().map((item, index) => {
      item.id = index;
      item.marginLeft = 0;
    });

    this.autoSlideInterval = setInterval(() => {
      this.setNext();
    }, 5000);

    this.finalHeight = this.isFullScreen() ? '100vh' : `${this.height()}px`;
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    const item = this.items().find(item => item.id === 0);
    if (item) item.marginLeft = -100 * position;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items().length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    const item = this.items().find(item => item.id === 0);
    if (item) item.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items().length - 1;
      finalPercentage = -100 * backPosition;
    }
    const item = this.items().find(item => item.id === 0);
    if (item) item.marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }
}
