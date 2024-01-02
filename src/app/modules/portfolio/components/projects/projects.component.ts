import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projects = signal<IProjects[]>([
    {
      src: 'https://sdbusiness.com.br/wp-content/uploads/2019/12/Ativo-4-1536x449.png',
      alt: '',
      title: "SDBUSINESS",
      width: '100px',
      height: "100px",
      description: "",
      links: [
        {
          name: "",
          href: ""
        }
      ]
    }
  ])
}
