import { Routes } from "@angular/router";
import { ListarTarefaComponent } from "./listar";
//criado apos criado a pasta cadastrar e component
import { CadastrarTarefaComponent } from "./cadastrar";
import { EditarTarefaComponent } from "./editar"; //feito automatico quando cria a rota embaixo


export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    }, //criado embaixo para cadastrar
    {
        path:'tarefas/cadastrar',
        component:CadastrarTarefaComponent
    },
    {
        path:'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];