import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), // Permite chamadas HTTP na aplicação
    provideAnimations(), // Necessário para alguns componentes do ngx-bootstrap
    BsModalService,  // Serviço necessário para os modais
    provideRouter(routes),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),

    // Registra os módulos do ngx-bootstrap
    { provide: ModalModule, useValue: ModalModule.forRoot() },
    { provide: CollapseModule, useValue: CollapseModule.forRoot() },
    { provide: TooltipModule, useValue: TooltipModule.forRoot() },
    { provide: PopoverModule, useValue: PopoverModule.forRoot() },
  ]
};
