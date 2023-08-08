import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent {
  listaCards = [
    {
      titulo: 'Limpeza',
      texto: 'Limpeza profissional dos dentes e gengiva, são essenciais para manter a saúde bucal e prevenir doenças nos tecidos de suporte do dente, como gengivite e periodontite.',
      imagem: 'perio-img'
    },
    {
      titulo: 'Odontopediatria',
      texto: 'Área da odontologia voltada para o cuidado da saúde bucal dos bebês, crianças e adolescentes, com tratamentos preventivos e interceptativos durante o período de troca dos dentes decíduos (dentes de leite) para os dentes permanentes. ',
      imagem: 'odonto-img'
    },
    {
      titulo: 'Clareamento',
      texto: 'O clareamento dental é o procedimento estético conservador para clarear os dentes de maneira eficaz e segura. Autoconfiança com seu sorriso também é saúde!',
      imagem: 'clareamento-img'
    },
    {
      titulo: 'Restauração',
      texto: 'A restauração dentaria é necessária quando um dente está acometido por lesão cariosa (cárie); fratura ou qualquer outro motivo que tenha levado à perda de alguma parte do dente, e tem o objetivo de obter seu formato e funções normais.',
      imagem: 'restauracao-img'
    },
    {
      titulo: 'Tratamento de Canal',
      texto: 'O tratamento de canal é indicado quando a polpa do dente está infeccionada e causando dor. O objetivo do tratamento é limpar (removendo a polpa infeccionada) e selar os canais dos dentes para prevenir novas infecções.',
      imagem: 'endodontia-img'
    },
    {
      titulo: 'Extração Dentária',
      texto: 'A extração dentária é indicada quando não é possível salvar algum dente por motivos de cárie extensa, fraturas ou dentes sisos que possam gerar prejuízo no paciente. Mas fique tranquilo, é um procedimento realizado com anestesia local! ',
      imagem: 'cirurgia-img'
    }
  ];

}
