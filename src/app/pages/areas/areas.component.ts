import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent {
  listaCards = [
    {
      titulo: 'Periodontia',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in nunc pharetra, mattis ligula eget, malesuada eros. Aliquam erat volutpat. Pellentesque eu convallis metus, commodo gravid. nunc pharetra, mattis, erat volutpat.',
      imagem: 'perio-img'
    },
    {
      titulo: 'Odontopediatria',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in nunc pharetra, mattis ligula eget, malesuada eros. Aliquam erat volutpat. Pellentesque eu convallis metus, commodo gravid. nunc pharetra, mattis, erat volutpat.',
      imagem: 'odonto-img'
    },
    {
      titulo: 'Clareamento',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in nunc pharetra, mattis ligula eget, malesuada eros. Aliquam erat volutpat. Pellentesque eu convallis metus, commodo gravid. nunc pharetra, mattis, erat volutpat.',
      imagem: 'clareamento-img'
    }
  ];

}
