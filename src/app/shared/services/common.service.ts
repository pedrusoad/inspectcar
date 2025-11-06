import { BehaviorSubject } from 'rxjs';

import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CommonService {
  //? versao do app
  private appVersion = '1.0.0';

  //? Criando o padrao para verificacao de erro de API
  private http_response_default = new BehaviorSubject(200);
  public http_response = this.http_response_default.asObservable();
  //? Criando o padrao para a variavel "isAuthenticated" do AppComponent
  private is_authenticated_default = new BehaviorSubject(false);
  public is_authenticated = this.is_authenticated_default.asObservable();

  constructor(
    private NgbModal: NgbModal
  ) { }

  // Funcao para alterar o erro de http
  public changeHttpResponse(httpStatus: number) {
    this.http_response_default.next(httpStatus);
  }
  // Função para alterar a variável "isAuthenticated" do AppComponent
  public changeIsAuthenticated(isAuthenticated: boolean) {
    this.is_authenticated_default.next(isAuthenticated);
  }
  /**
   * @param hml Caso seja HML retornar o hml no final da versão
   * @returns Versão do App
   */
  
  public getDeviceId(): string {
    return this.getLocalStorage('device-id') ? this.getLocalStorage('device-id') : '123';
  }
  /**
  * setSessionStorage: Grava no localStorage do browser os dados informados
  * @param varName Nome da variavel a ser criada no localStorage
  * @param value Valor da variavel
  * @param expire [Opicional] Tempo de validade em milesegundos (0 = nunca expira)
  */
  public setSessionStorage(varName: string, value: any, expire: number = 0) {
    // Testa se navegador tem suporte a gravação temporaria
    if (typeof Storage !== 'undefined') {
      // Criando arquivo para salvar
      const RECORD = {
        // tslint:disable-next-line:object-literal-shorthand
        value: value,
        timestamp: (expire === 0) ? 0 : new Date().getTime() + expire
      };
      // Grava as informações no navegador
      sessionStorage.setItem(varName, JSON.stringify(RECORD));
      // retorna verdadeiro, informando que foi gravada a variável
      return true;
    } else {
      // se não tiver suporte a gravacao, retorna falso
      return false;
    }
  }
  /**
   * getSessionStorage: Retorna o conteudo de uma variavel gravada no localStorage do browser
   * @param varName Nome da variável a ser recuperada
   * @returns Conteúdo da variável solicitada
   */
  public getSessionStorage(varName: string) {
    // Recebendo variável
    let record: any = sessionStorage[varName];
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
  /**
   * delSessionStorage: Remove uma variável armazenada no localStorage do browser
   * @param varName Nome da variável
   */
  public delSessionStorage(varName: string) {
    // Testa se navegador tem suporte a gravação temporaria
    if (typeof Storage !== 'undefined') {
      // Deleta a variável
      sessionStorage.removeItem(varName);
      // retorna verdadeiro, informando que foi removida
      return true;
    } else {
      // se não tiver suporte a gravacao, retorna falso
      return false;
    }
  }
  /**
   * setLocalStorage: Grava no localStorage do browser os dados informados
   * @param varName Nome da variavel a ser criada no localStorage
   * @param value Valor da variavel
   * @param expire [Opicional] Tempo de validade em milesegundos (0 = nunca expira)
   */
  public setLocalStorage(varName: string, value: any, expire: number = 0) {
    // Testa se navegador tem suporte a gravação temporaria
    if (typeof Storage !== 'undefined') {
      // Criando arquivo para salvar
      const RECORD = {
        // tslint:disable-next-line:object-literal-shorthand
        value: value,
        timestamp: (expire === 0) ? 0 : new Date().getTime() + expire
      };
      // Grava as informações no navegador
      localStorage.setItem(varName, JSON.stringify(RECORD));
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
  /**
   * delLocalStorage: Remove uma variável armazenada no localStorage do browser
   * @param varName Nome da variável
   */
  public delLocalStorage(varName: string) {
    // Testa se navegador tem suporte a gravação temporaria
    if (typeof Storage !== 'undefined') {
      // Deleta a variável
      localStorage.removeItem(varName);
      // retorna verdadeiro, informando que foi removida
      return true;
    } else {
      // se não tiver suporte a gravacao, retorna falso
      return false;
    }
  }
  /**
   * Valida os digitos verificadores de um CPF
   * @param cpf <string> CPF
   * @returns boolean
   */
  private isValidCPF(cpf: string): boolean {
    const BLACKLIST: Array<string> = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      '12345678909'
    ];
    if (!cpf) {
      return false;
    }
    // CPF can't be blacklisted
    else if (BLACKLIST.includes(cpf)) {
      return false
    }
    const verifierDigit = (digits: string): number => {
      const NUMBERS: Array<number> = digits
        .split('')
        .map(number => {
          return parseInt(number, 10)
        })
      const MODULES: number = NUMBERS.length + 1
      const MULTIPLIED: Array<number> = NUMBERS.map((number, index) => number * (MODULES - index))
      const MOD: number = MULTIPLIED.reduce((buffer, number) => buffer + number) % 11
      return (MOD < 2 ? 0 : 11 - MOD)
    }
    let numbers: string = cpf.slice(0, 10)
    numbers += verifierDigit(numbers)
    numbers += verifierDigit(numbers)
    return numbers.slice(-2).endsWith(cpf.slice(-2))
  }
  /**
   ** Valida os dígitos verificadores de um CNPJ
   * @param cnpj <string> CNPJ
   * @returns boolean
   */
  private isValidCNPJ(cnpj: string): boolean {
    const BLACKLIST: Array<string> = [
      '00000000000000',
      '11111111111111',
      '22222222222222',
      '33333333333333',
      '44444444444444',
      '55555555555555',
      '66666666666666',
      '77777777777777',
      '88888888888888',
      '99999999999999'
    ];
    if (!cnpj) {
      return false;
    }
    // CPF não pode estar em "BLACKLIST"
    else if (BLACKLIST.includes(cnpj)) {
      return false
    }
    const verifierDigit = (digits: string): number => {
      let index: number = 2;
      const REVERSE: Array<number> = digits.split('').map(Number).reverse()
      const SUM: number = REVERSE.reduce((buffer, number) => {
        buffer += number * index
        index = (index === 9 ? 2 : index + 1)
        return buffer
      }, 0)
      const MOD: number = SUM % 11
      return (MOD < 2 ? 0 : 11 - MOD)
    }
    let numbers: string = cnpj.slice(0, 13)
    numbers += verifierDigit(numbers)
    numbers += verifierDigit(numbers)
    return numbers.slice(-2).endsWith(cnpj.slice(-2))
  }
  /**
   * Verifica se um documento informado é um CPF ou CNPJ válido
   * @param document <string> CPF ou CNPJ
   * @returns boolean
   */
  public isValid(document: string): boolean {
    if (!document) {
      return false;
    } else {
      document = document.replace(/\D/g, '');
      if (document.length !== 11 && document.length !== 14) {
        return false;
      } else if (document.length === 11) {
        return this.isValidCPF(document);
      } else {
        return this.isValidCNPJ(document);
      }
    }
  }
  public isValidData(dataStr?: string): boolean {
    if (dataStr) {

      const SLICES = dataStr.split('/');

      if (SLICES.length !== 3) {
        return false;
      }

      const DAY = parseInt(SLICES[0], 10);
      const MOUNTH = parseInt(SLICES[1], 10);
      const YEAR = parseInt(SLICES[2], 10);

      if (isNaN(DAY) || isNaN(MOUNTH) || isNaN(YEAR)) {
        return false;
      }

      if (YEAR < 1000 || YEAR > 9999 || MOUNTH < 1 || MOUNTH > 12) {
        return false;
      }

      const DAY_BY_MOUNTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (YEAR % 4 === 0 && (YEAR % 100 !== 0 || YEAR % 400 === 0)) {
        DAY_BY_MOUNTH[2] = 29; // Ano bissexto
      }

      return DAY >= 1 && DAY <= DAY_BY_MOUNTH[MOUNTH];
    }
    else {
      return false;
    }

  }
  /**
   * Abre um modal do NG Bootstrap
   * @param content: <TemplateRef> Template que será carregado pelo modal
   * @param callBack: <function> Função de retorno do modal
   * @param options: <object> [Opcional] Opções do modal
   */
  public openModal(content: TemplateRef<any>, callback?: (result?: boolean) => void, options?: any): NgbModalRef {
    const MODAL_OPTIONS: any = {
      centered: true,
      backdropClass: 'bg-dark',
      keyboard: false,
      animation: true,
      backdrop: 'static',
      size: 'lg'
    };
    if (options) {
      for (const key in options) {
        if (Object.hasOwn(options, key)) {
          MODAL_OPTIONS[key] = options[key];
        }
      }
    }
    const MY_MODAL: NgbModalRef = this.NgbModal.open(content, MODAL_OPTIONS);
    if (callback) {
      MY_MODAL.result.then((result) => {
        callback(result);
      });
    }
    return MY_MODAL;
  }
  /**
  **  Verifica se um objeto é vazio
  * @param obj Objeto que sera verificado
  * @returns true || false
  */
  public verifyisEmptyObject(obj: any): boolean {
    let is_empty: boolean = true;
    if (obj) {
      let ignorable_atributes = ['status', 'statusCode', 'statusTicket', 'statusDescription', 'confirmed', 'hasModal', 'hasPopover', 'strValue']
      Object.keys(obj)?.forEach(key => {
        if (!ignorable_atributes.includes(key)) {
          if (Array.isArray(obj[key])) {
            if (obj[key].length > 0) is_empty = false;
          }
          else if (typeof obj[key] === 'object') this.verifyisEmptyObject(obj[key])
          else if (obj[key]) is_empty = false;
        }
      })
    }
    return is_empty;
  }
  /**
  ** Mover um elemento de um vetor para outra posição
  * @param arr Vetor que sera alterado
  * @param oldIndex Posição no elemento que será movido
  * @param newIndex Nova posição no elemento que será movido
  */
  public arrayMove(array: any[], oldIndex: number, newIndex: number) {
    if (newIndex >= array.length) {
      let k = newIndex - array.length + 1;
      while (k--) {
        array.push(undefined);
      }
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array;
  };
}