// Define as configurações globais da aplicação
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), // recomendado com SSR
    provideAnimations() // Adiciona suporte a animações
  ]
};

