import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppModule } from '@core'
import { BtnComponent } from '../buttons';

@Component({
  selector: 'app-privacidade-card',
  standalone: true,
  templateUrl: './privacidade-card.component.html',
  styleUrls: ['./privacidade-card.component.scss'],
  imports: [
    AppModule,
    RouterModule,
    BtnComponent
  ]
})
export class PrivacidadeCardComponent implements OnInit {
  public isPolictAccepted: boolean = true;
  constructor() { }

  public setLocalStorage(varName: string, value: any, expire: number = 0) {
    // Testa se navegador tem suporte a gravação temporaria
    if (typeof Storage !== 'undefined') {
      // Criando arquivo para salvar
      const record = {
        // tslint:disable-next-line:object-literal-shorthand
        value: value,
        timestamp: (expire === 0) ? 0 : new Date().getTime() + expire
      };
      // Grava as informações no navegador
      localStorage.setItem(varName, JSON.stringify(record));
      // retorna verdadeiro, informando que foi gravada a variável
      return true;
    } else {
      // se não tiver suporte a gravacao, retorna falso
      return false;
    }
  }
  /**
   * getLocalStorage: Retorna o conteudo de uma variavel gravada no localStorage do browser
   * @param varName Nome da variável a ser recuperada
   * @returns Conteúdo da variável solicitada
   */
  public getLocalStorage(varName: string) {
    // Recebendo variável
    let record: any = localStorage[varName];
    // Se não encontrar a variável, retorna falso
    if (!record) {
      return false;
    } else {
      record = JSON.parse(record);
      // se o prazo a variavel ainda nao tiver expirado
      if (record.timestamp === 0 || new Date().getTime() <= record.timestamp) {
        // retorna o conteudo da variável
        return record.value;
      } else {
        // se o prazo já tiver espirado, deleta a variável do armazenamento
        sessionStorage.removeItem(varName);
        // retorna falso
        return false;
      }
    }
  }

  public confirmCookie() {
    const payLoad = {
      accepted: true
    }
    this.setLocalStorage('privacidade', payLoad);
    this.isPolictAccepted = true; // politica aceita para deixar de visualizar o popover
  }

  ngOnInit(): void {
    // verifica se a politica foi aceita antes
    if (!this.getLocalStorage('privacidade')) {
      setTimeout(() => {
        this.isPolictAccepted = false; // politica aceita para  visualizar o popover
      }, 1000)
    }
  }

}