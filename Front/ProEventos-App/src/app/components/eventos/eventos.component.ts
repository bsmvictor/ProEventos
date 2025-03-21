import { Component, OnInit, TemplateRef } from '@angular/core';
import { TituloComponent } from "../../shared/titulo/titulo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
  imports: [TituloComponent,RouterModule],
})

export class EventosComponent implements OnInit {

  ngOnInit(): void {

  }

}
