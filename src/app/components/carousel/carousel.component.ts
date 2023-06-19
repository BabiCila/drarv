import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
    images = [
    `../../../assets/img/carousel1.svg`,
    `../../../assets/img/carousel2.svg`,
    `../../../assets/img/carousel3.svg`,
    `../../../assets/img/carousel/consulta-carousel.svg`,
    `../../../assets/img/carousel/atendimento-carousel.svg`,
    `../../../assets/img/carousel/areas-carousel.svg`
  ]
}

