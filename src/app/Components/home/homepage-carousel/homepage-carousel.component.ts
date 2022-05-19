import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-carousel',
  templateUrl: './homepage-carousel.component.html',
})
export class HomepageCarouselComponent {
  image1H3: string = '';
  image1P: string = '';
  image2H3: string = '';
  image2P: string = '';
  image3H3: string = '';
  image3P: string = ``;

  images = [107, 337, 165].map((n) => `https://picsum.photos/id/${n}/1600/600`);

  constructor() {}

  ngOnInit(): void {}
}
