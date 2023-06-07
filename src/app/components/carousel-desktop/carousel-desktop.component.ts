import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-desktop',
  templateUrl: './carousel-desktop.component.html',
  styleUrls: ['./carousel-desktop.component.scss']
})
export class CarouselDesktopComponent {
  images = [
    `../../../assets/img/carousel/consulta-carousel.svg.svg`,
    `../../../assets/img/carousel/atendimento-carousel.svg.svg`,
    `../../../assets/img/carousel/areas-carousel.svg.svg`
  ]
}
