import { Injectable } from '@angular/core';
import { Tarefa } from '../shared';
@Injectable()

export class TarefaService {
  //aqui sao criados os metodos que vai realizaar o CRUD
  constructor() {

  }

  /**
   * lista as tarefas armazenadas no localStorage
   * @returns Tarefa []
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];  //operador ternario
  } //converte de string(do localStorage), para arquivo JSON ( objeto)

  /**
   * cadastra uma tarefa ,transforma em String e armazena no localsotorage
   * @param tarefa tarefa atual
   */
  cadastrar(tarefa: Tarefa): void {
    //chama lista todas tarefas
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime(); //metodo determinado para atribuir o ID,pode ser qualquer uma 
    tarefas.push(tarefa); //add no array a tarefa atual
    localStorage['tarefas'] = JSON.stringify(tarefas); //converte pra string e joga no localStorage
  }//cad

  /**
   * Busca uma tarefa por id e retorna se achar
   * @param id 
   * @returns Tarefa
   */
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    //busca o id e se for igual retorna o Tarefa 
    return tarefas.find(tarefa => tarefa.id === id);
  }//busca

  /**
   * atualiza a tarefa
   * @param tarefa 
   * @return void
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    //localstorage recebe so string,então converte
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }//atualiza
  /**
   * Filtra as tarefas diferentes do parametro id ,e armazena em tarefas
   * @param id da tarefa
   */
  remover(id: number): void {
    //let porque vai altrar a variavel
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefas => tarefas.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }//remover

  /**
   * Muda o status da variavel concluida
   * @param id 
   * @return void
   */
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}//export class
