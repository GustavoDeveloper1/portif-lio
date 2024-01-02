import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/Iexperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public Experiences = signal<IExperiences[]>([
    {
      sumary: {
        strong: 'Front-End Junior',
        p: 'Grupo Positiva | Ago 2023 - Present',
      },
      text: '<p> Atuando na área de suporte da empresa, como Analista de Suporte, fazendo reparos na rede e máquinas e criando sistemas de gerenciamento de clientes em web, sites em react. Trabalhando também com desenvolvimento de um sistema em angularJs</p>'
    },
    {
      sumary: {
        strong: 'Full Stack Junior',
        p: 'Garage Detail | Dez 2022 - Present',
      },
      text: '<p>Atuando com tecnologias de ponta como Php com Laravel ,Flutter e angular trabalhei com sites e  sistemas de gerenciamento para empresas e eventos,' +
        'trabalhei diretamente com a  criação de layout UI&UX e juntamente com o frontend e o backend. Fazendo integração com a API REST FULL criada com o framework Laravel e ultilizando'
        + ' outras bibliotecas backend para aprimorar a API. No Front end utilizamos frameworks como angularjs e Reactjs e Bootstrap e tailwind css, contando tambem com um aplicativo em flutter</p>'
    },
    {
      sumary: {
        strong: 'Full Stack Junior',
        p: 'Focus Code | Abr 2020 - Out 2023',
      },
      text: '<p>Atuando com tecnologias de ponta como nodejs e reactjs trabalhei com sites e  sistemas de gerenciamento para empresas e eventos,' +
        'trabalhei diretamente com a  criação de layout UI&UX e juntamente com o frontend e o backend. Fazendo integração com a API REST FULL criada com o framework express e ultilizando'
        + ' outras bibliotecas backend para aprimorar a API. No Front end utilizamos frameworks como angularjs e Reactjs e Bootstrap e tailwind css </p>'
    },
    {
      sumary: {
        strong: 'Front-end Junior',
        p: 'SD Innovation | Abr 2022 - Dez 2022',
      },
      text: '<p>Atuando com desenvolvimento frontEnd utilizando frameWorks como angular e ReactJs' +
        'ajudei a implementar soluções como o sistema de Gerenciamento de Aparelhos SD Business e o sistema de mensagens instantâneas para empresas SD messenger'
        + 'trabalhando com requisições HTTP e conexão com socketIo, trabalhando com clean Architecture, clean Code e metodologia scrum</p>'
    },
  ])
}
