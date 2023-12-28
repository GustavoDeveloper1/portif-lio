import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public knowledges = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'icone de conhecimentos'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'icone de conhecimentos'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'icone de conhecimentos'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'icone de conhecimentos'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'icone de conhecimentos'
    },
  ]);

}
