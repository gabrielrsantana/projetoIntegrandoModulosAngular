import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// ### importa automaticamente quando coloca os ...xxxRouter
//Se nao importa tem que acrescenter manualmente
import { CalculadoraRoutes } from "./calculadora/calculadora-routing.module";
import { ConversorRoutes } from "./conversor/conversor-routing.module";
import { DashboardRoutes } from "./dashboard/dashboard-routing.module";
import { JogoDaVelhaRoutes } from "./jogo-da-velha/jogodavelha-routing.module";
import { TarefaRoutes } from "./tarefas";

//faz export pra ficar disponivel pro modulo principal
export const routes = [
    {
        path: '',
        //ja inicia com projeto do dashboard
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    /// '...' significa que pega todas as rotas e concatena aqui,do dashboard
    //acrescente todas as rotas dos componentes criados nos outros projetos
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConversorRoutes,
    ...TarefaRoutes,
    ...JogoDaVelhaRoutes

];

//ngmodule é o que diz se e decorador ou nao
@NgModule({
    imports:[
        //forrouters garante que e modulo unico da apliacao
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule ]
})

export class AppRoutingModule{}