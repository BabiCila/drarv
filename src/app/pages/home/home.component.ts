import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
