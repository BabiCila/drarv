import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card = {
    titulo: 'Periodontia',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in nunc pharetra, mattis ligula eget, malesuada eros. Aliquam erat volutpat. Pellentesque eu convallis metus, commodo gravid. nunc pharetra, mattis, erat volutpat.',
    imagem: 'perio-img'
  }
}
