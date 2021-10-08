import { Component, OnInit, ViewChild } from '@angular/core';
//importa os forms para validacao
import { NgForm} from '@angular/forms';
import { ConversorService, MoedaService } from '../services';
import {Moeda , Conversao, ConversaoResponse } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  //tava dando erro como private
   moedas: Moeda[];
   conversao:Conversao;
   possuiErro: boolean;
   conversaoResponse: ConversaoResponse;
  
  //usa a variavel conversaoForm no html
  @ViewChild("conversaoForm",{static:true}) conversaoForm:NgForm

  //chama o servico dentro do construtor
  constructor(private moedaService:MoedaService,
    private conversorService:ConversorService) { }


  ngOnInit(): void {
    //carrega todas moedas 
    this.moedas = this.moedaService.listarTodas();
    //chama Init criado abaixo para iniciar 
    this.init();
  }

  /** Efetua a chama de conversao de valores
   * assim que carrega a pagina, sejam setados como
   *  padrao e nao apareca erros
   */
  init():void{
    //de EUR para real,pois na API so tem base como EUR
    this.conversao = new Conversao('EUR','BRL',null);
    this.possuiErro = false;
  }

  converter():void{
    if(this.conversaoForm.form.valid){
      this.conversorService.converter(this.conversao).subscribe(
      response => this.conversaoResponse = response,
      error => this.possuiErro =true)
    }
  }

}//exports
