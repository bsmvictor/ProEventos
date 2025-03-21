import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from "./components/eventos/eventos.component";
import { PalestrantesComponent } from "./components/palestrantes/palestrantes.component";
import { NavComponent } from "./shared/nav/nav.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContatosComponent } from "./components/contatos/contatos.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PerfilComponent } from "./components/user/perfil/perfil.component";
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EventosComponent,
    PalestrantesComponent,
    NavComponent,
    NgxSpinnerModule,
    ContatosComponent,
    DashboardComponent,
    PerfilComponent,
    EventoListaComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProEventos-App';
}
