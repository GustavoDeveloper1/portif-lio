import { Component, inject, signal } from '@angular/core';

//interfaces
import { IProjects } from '../../interfaces/IProjects.interface';

//material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);


  public projects = signal<IProjects[]>([
    {
      src: 'https://sdbusiness.com.br/wp-content/uploads/2019/12/Ativo-4-1536x449.png',
      alt: '',
      title: "SDBUSINESS",
      width: '100px',
      height: "100px",
      description: "Atuando com desenvolvimento frontEnd utilizando frameWorks como angular e ReactJs, ajudei a implementar soluções como o sistema de Gerenciamento de Aparelhos SD Business e o sistema de mensagens instantâneas para empresas SD messenger, trabalhando com requisições HTTP e conexão com socketIo, trabalhando com clean Architecture, clean Code  e metodologia scrum. ",
      links: [
        {
          name: "",
          href: ""
        }
      ]
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data: data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
