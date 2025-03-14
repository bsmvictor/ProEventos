import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-eventos',                     // Como o componente será chamado
  standalone: true,                           // Componente é independente
  imports: [CommonModule,
            CollapseModule,
            FormsModule],                   // Importar módulos necessários
  templateUrl: './eventos.component.html',  // Caminho do arquivo HTML
  styleUrl: './eventos.component.scss'     // Caminho do arquivo SCSS
})
export class EventosComponent implements OnInit {

  public eventos: any = [];

  public eventosFiltrados: any = [];

  private http = inject(HttpClient);

  showImage: boolean = true;

  private _filtroDeEventos: string = '';

  public get filtroDeEventos(): string{
    return this._filtroDeEventos;
  }

  public set filtroDeEventos(evento: string){
    this._filtroDeEventos = evento;
    this.eventosFiltrados = this.filtroDeEventos ? this.filtrarEventos(this.filtroDeEventos) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  ngOnInit(): void {
    this.getEventos();
  }

  public toggleImage() {
    this.showImage = !this.showImage;
  }

  public getEventos(): void {
    this.http.get('https://localhost:7167/api/eventos').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    );
  }
}
