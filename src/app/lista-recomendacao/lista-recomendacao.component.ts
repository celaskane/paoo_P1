import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-recomendacao',
  templateUrl: './lista-recomendacao.component.html',
  styleUrls: ['./lista-recomendacao.component.css']
})
export class ListaRecomendacaoComponent {

  @Input() recomendacao

}
