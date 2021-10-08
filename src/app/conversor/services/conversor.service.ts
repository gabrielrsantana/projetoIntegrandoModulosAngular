//http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
//tem limite de 250 acessos para a API
import { Injectable } from '@angular/core';
//importa o httpClient para acesso a API
import { HttpClient } from '@angular/common/http';
import { ConversaoResponse, Conversao } from '../models';
import { Observable } from 'rxjs';

@Injectable()
//observer padrao de projeto
//tem que criar acesso senao esgota o acesso dos acessos,250 mensais
//criar uma chave nova para os acessos mensais
//moeda base EUR
export class ConversorService {
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=612184775e4e4eca8bcc9272508fe3bf";

  constructor(private http: HttpClient) { }
  /**
   * Realizar a chamada para a API de conversão de moedas.Concatena  a base com os parametros
   * @param conversao 
   */
  converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    console.log("4entrou no conversorService.converter")
    return this.http.get(this.BASE_URL + params);
  }//converter

  /**
   * Retorna a cotação para um dado de resposta
   * @param ConversaoResponse 
   * @param conversao 
   * @returns number
   */
  cotacaoPara(conversaoResponse:ConversaoResponse,
    conversao:Conversao):number{

      if(conversaoResponse ===undefined){
        return 0;
      }
      return conversaoResponse.rates[conversao.moedaPara];

  }//cotacaoPara

  /**
   * 
   * @param ConversaoResponse 
   * @param conversao 
   * @returns 
   */
  cotacaoDe(ConversaoResponse: ConversaoResponse,conversao:Conversao):string{
    if(ConversaoResponse ===undefined){
      return '0';
    }
    return (1/ConversaoResponse.rates[conversao.moedaPara]).toFixed(4);


  }//cotacaoDe

  /**
   * 
   * @param  conversaoResponse data cotação
   * @returns 
   */
  dataCotacao(conversaoResponse: ConversaoResponse):string{
    if(conversaoResponse === undefined){
      return '';
    }
    return conversaoResponse.date;
  }

}//exports

