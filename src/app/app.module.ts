import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecomendacaoInserirComponent } from './recomendacao-inserir/recomendacao-inserir.component';
import { ListaRecomendacaoComponent } from './lista-recomendacao/lista-recomendacao.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendacaoInserirComponent,
    ListaRecomendacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
