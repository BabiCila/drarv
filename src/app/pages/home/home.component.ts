import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listaCards = [
    {
      titulo: 'Limpeza',
      texto: 'A limpeza profissional dos dentes e gengiva, são essenciais para manter a saúde bucal e prevenir doenças nos tecidos de suporte do dente, como gengivite e periodontite.',
      imagem: 'perio-img'
    },
    {
      titulo: 'Odontopediatria',
      texto: 'Área dedicada ao cuidado da saúde bucal dos bebês, crianças e adolescentes, com tratamentos preventivos e interceptativos durante o período de troca dos dentes.',
      imagem: 'odonto-img'
    },
    {
      titulo: 'Clareamento',
      texto: 'O clareamento dental é o procedimento estético conservador para clarear os dentes de maneira eficaz e segura. Autoconfiança com seu sorriso também é saúde!',
      imagem: 'clareamento-img'
    }
  ];

}
