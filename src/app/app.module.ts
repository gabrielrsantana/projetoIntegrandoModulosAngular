import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//############# importando a calculadora
import { CalculadoraModule } from './calculadora';
//##########importando o modulo do conversor
import { ConversorModule } from './conversor';
//############# importando o dashboard
import { DashboardModule } from './dashboard';
import { JogoDaVelhaModule } from './jogo-da-velha';
import { TarefasModule } from './tarefas';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // importa todos os modulos que foram criados nos outros projetos
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule,
    //approutingmodule sempre fica por ultimo,todos os modulos precisam ser reconhecidos antes os outros modulos importados
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
