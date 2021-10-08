import { Component, OnInit } from '@angular/core';
//impórtanto do shared
import { TarefaService ,Tarefa} from '../shared';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  //criar variavel,q  vai ser usada no html
  tarefas: Tarefa[];
  //pode inciiar no consturtor() ou NgOnInit()
  constructor(private tarefaService: TarefaService) { 

  }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
 
  }
   
   

  listarTodos():Tarefa[]{
    return this.tarefaService.listarTodos();
  }
  /**
   * 
   * @param tarefa 
   */
  alterarStatus(tarefa:Tarefa):void{
    if(confirm('Deseja alterar o status da Tarefa"'+tarefa.nome+'"?')){ 
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas =this.listarTodos();
    }else{
      this.tarefas = this.listarTodos();
    }
  }//alterar

  /**
   * Remove uma tarefa
   * @param $event 
   * @param tarefa 
   * @return void
   */ 
  remover($event:any,tarefa:Tarefa):void{
    //nao remove imediatamente
    $event.preventDefault();
    if(confirm('Deseja alterar a tarefa"'+tarefa.nome+'"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
//remover
  }


}//export
