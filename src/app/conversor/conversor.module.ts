import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService,ConversorService } from './services';
import {HttpClientModule} from '@angular/common/http';
//forms para validar
import { FormsModule } from '@angular/forms';
import { ModalCotacaoComponent } from './utils';
//diretiva para tratar os erros no formulario,letras..etc
import { NumeroDirective } from './directives';
import { DataBrPipe } from './pipes'; //depois de criado o modal

@NgModule({
  declarations: [
    ConversorComponent,
    ModalCotacaoComponent,
    NumeroDirective,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule   
  ],
  exports:[
    ConversorComponent
  ],
  providers:[ //servicos criados
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
