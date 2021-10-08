import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class DadosService {
//  readonly dados = [
//    ['Janeiro',33],
//    ['Fevereiro',68],
//    ['Marco',49],
//    ['Abril',15],
//    ['Maio',80],
//    ['Junho',27],
   
//   ];
// junho = document.getElementById('mes1');
// julho = document.getElementById('mes2');
// agosto = document.getElementById('mes3');
// setembro = document.getElementById('mes4');



readonly dados = [
  ['Junho',33],
  ['julho',68],
  ['agosto',49],
  ['setembro',15],
    
 ];

  constructor() { }

  obterDados():Observable<any>{
    return new Observable(observable =>{
      //observable na compuacao reativa,so responde qunado necessario
      //next() - metodo obrigatorio,depois a instancia do obj
      //permite o processamnento dos dados,quando novo dado esta disponivel
      //next()-notifica quando um novo dado esta disponivel 
      observable.next(this.dados);
      //complete()-  encerra quando nao tem mais dados para vir
      observable.complete();
    });
  }//obter dados



}//export
