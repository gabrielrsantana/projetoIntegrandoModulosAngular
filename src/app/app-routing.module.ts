// esse arquivo tem a função de importar as rotas dos modulos criados em outros projetos
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// ### importa automaticamente quando coloca os ...xxxRouter
//Se nao importar tem que acrescenter manualmente o caminho
import { CalculadoraRoutes } from "./calculadora/calculadora-routing.module";
import { ConversorRoutes } from "./conversor/conversor-routing.module";
import { DashboardRoutes } from "./dashboard/dashboard-routing.module";
import { JogoDaVelhaRoutes } from "./jogo-da-velha/jogodavelha-routing.module";
import { TarefaRoutes } from "./tarefas"; //importa todas as rotas do modulo TerefasRoutes

//faz export das rotas pra ficar disponivel pro modulo principal
export const routes = [
    {    //o path vazio significa que é a raiz do projeto,e é redirecionado para o dashboard
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