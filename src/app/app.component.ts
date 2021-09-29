import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PAOO-P1';

  recomendacoes = [
    {texto: 'pode sair de casa? pode. é de bom tom? não.'}
  ]

  onRecomendacaoInserida(recomendacao){
    this.recomendacoes = [recomendacao, ...this.recomendacoes]
  }

}
