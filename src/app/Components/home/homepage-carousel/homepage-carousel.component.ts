import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-carousel',
  templateUrl: './homepage-carousel.component.html',
})
export class HomepageCarouselComponent {
  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/1600/600`
  );

  constructor() {}

  ngOnInit(): void {}
}
