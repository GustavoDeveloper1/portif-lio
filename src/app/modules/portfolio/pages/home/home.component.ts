import { Component } from '@angular/core';


import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponentComponent, KnowledgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
