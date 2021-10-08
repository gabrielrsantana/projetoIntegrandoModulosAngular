import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared'; //importa se n for criado automaticamente



@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JogoDaVelhaComponent
  ],
  providers:[
    JogoDaVelhaService //cria o provider depois de criar o service
  ]
})
export class JogoDaVelhaModule { }
