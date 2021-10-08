//na hora de importar o EventEmitter importa de stream...
//corrigir depois
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConversorService } from '../services';
import { ConversaoResponse, Conversao } from '../models';
// modal é onnde é mostrado o resultado da conversao
@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {
  //input pra usar no component.html [id]="'modalCotacao'"
  @Input() id: string;

  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  // @output cria um evento personalizado no conversor.component.html
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
  }

  novaConsulta() {
    this.onConfirm.emit();
  }

  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }
    return (this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
  }//valorconvertido

  get cotacaoPara(): number {
    return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao)
  }


  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao)
  }


  get dataCotacao(): string {
    return this.conversorService.dataCotacao(this.conversaoResponse)
  }




}//exports
