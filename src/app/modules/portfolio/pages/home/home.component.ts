import { Component } from '@angular/core';


import { HeaderComponentComponent } from '../../components/header-component/header-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
