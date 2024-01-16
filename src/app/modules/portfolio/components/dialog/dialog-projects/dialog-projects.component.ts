import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interfaces/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private _data: IProjects,
    private _dialogRef: MatDialogRef<DialogProjectsComponent>) { }

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);

    // console.log(this._data)
  }

  public closeModal() {
    return this._dialogRef.close();
  }

}


