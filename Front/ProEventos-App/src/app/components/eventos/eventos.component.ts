import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { DateTimeFormatPipe } from '../../helpers/DateTimeFormat.pipe';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TituloComponent } from "../../shared/titulo/titulo.component";

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, FormsModule, CollapseModule, DateTimeFormatPipe, NgxSpinnerModule, TituloComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})

export class EventosComponent implements OnInit {

  public eventos: Evento[] = [];

  public eventosFiltrados: Evento[] = [];

  public showImage: boolean = true;

  private _filtroDeEventos: string = '';

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  public get filtroDeEventos(): string{
    return this._filtroDeEventos;
  }

  public set filtroDeEventos(evento: string){
    this._filtroDeEventos = evento;
    this.eventosFiltrados = this.filtroDeEventos ? this.filtrarEventos(this.filtroDeEventos) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getEventos();
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

public getEventos(): void {
  this.spinner.show();

  this.eventoService.getEventos().subscribe({
    next: (_eventos: Evento[]) => {
      this.eventos = _eventos;
      this.eventosFiltrados = this.eventos;
    },
    error: (error: any) => {
      this.spinner.hide();
      this.toastr.error('Erro ao carregar eventos', 'Erro');
    },
    complete: () => this.spinner.hide()
  });
}


 //----------------------------------- modal -----------------------------------

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<void>): void {
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void {
    this.toastr.success('Evento deletado com sucesso', 'Deletado');
    this.modalRef?.hide();
  }

  decline(): void {
    this.modalRef?.hide();
  }


}
