import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-carousel',
  templateUrl: './homepage-carousel.component.html',
})
export class HomepageCarouselComponent {
  image1H3: string = 'WE SEE THE LIGHT OF THE DAY';
  image1P: string = 'Our wheat ears are born from the fertile land';
  image2H3: string = 'WE LOOK AT THE SUN';
  image2P: string = 'They flatter themselves in the wind and caress the sun';
  image3H3: string = 'THE GREAT MOMENT HAS ARRIVED!';
  image3P: string = `Follow the long road to the skilled hands of our bakers. Let's get to know each other...`;

  images = [107, 337, 165].map((n) => `https://picsum.photos/id/${n}/1600/600`);

  constructor() {}

  ngOnInit(): void {}
}
