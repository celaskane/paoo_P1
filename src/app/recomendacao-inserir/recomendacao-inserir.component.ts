import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent{

  @Output () recomendacaoInserida = new EventEmitter()

  adicionar (texto){
    this.recomendacaoInserida.emit({texto})
  }

}
