import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  standalone: true,
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  @Input() titulo = 'Evento';

  constructor() { }

  ngOnInit() {
  }

}
