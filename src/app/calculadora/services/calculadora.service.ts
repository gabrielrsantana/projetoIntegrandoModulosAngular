/**
*Serviço responsavel por executar as operações da calculadora
*
*@autor Sayure Vieira <sayure.paiva@soulcodeacademy.org>
*@since 1.0
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* definindo as constantes para utilizar nas operacoes de calculo
  */ 
static readonly SOMA:string = '+';
static readonly SUBTRACAO:string = '-';
static readonly DIVISAO:string = '/';
static readonly MULTIPLICACAO:string = '*';

  constructor() { }
/**
 * metodo que calcula uma operação matemática dado dois numerose uma operação
 * suporta as operacoes de soma,subtracao,divisao e multiplicacao
 * @param num1 number
 * @param num2 number
 * @param operacao string operacao a ser executada
 * @returns resultado da operacao
 */
  calcular(num1:number,num2:number,operacao:string):number{
    let resultado:number;
    switch(operacao){
      case CalculadoraService.SOMA:
        resultado= num1 +  num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado= num1 -  num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado= num1 /  num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado= num1 *  num2;
      break;
      default: 
        resultado=0;
    }//switch
    return resultado;
  }

}//export
