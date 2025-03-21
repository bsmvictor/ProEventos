import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, TemplateRef } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DateTimeFormatPipe } from '../../../helpers/DateTimeFormat.pipe';
import { Evento } from '../../../models/Evento';
import { EventoService } from '../../../services/evento.service';
import { FormsModule } from '@angular/forms';
import { TituloComponent } from '../../../shared/titulo/titulo.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-evento-lista',
  standalone: true,
  imports: [
    CommonModule,
    CollapseModule,
    DateTimeFormatPipe,
    NgxSpinnerModule,
    FormsModule,
    TituloComponent,
    RouterModule
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './evento-lista.component.html',
  styleUrl: './evento-lista.component.scss'
})
export class EventoListaComponent {

  public eventos: Evento[] = [];

  public eventosFiltrados: Evento[] = [];

  public showImage: boolean = true;

  private _filtroDeEventos: string = '';

  modalRef?: BsModalRef;

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
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

  detalheEvento(id: number): void {
    this.router.navigate([`eventos/detalhe/${id}`]);
  }
}
