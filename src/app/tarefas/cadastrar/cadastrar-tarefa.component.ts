import { Component, OnInit, ViewChild } from '@angular/core';
// importa o form
import { NgForm } from '@angular/forms';
import { TarefaService,Tarefa } from '../shared';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {
 @ViewChild('formTarefa',{static:true})formTarefa: NgForm
 tarefa: Tarefa;

 constructor(private tarefaService: TarefaService,private router:Router) { }

  ngOnInit(): void {
    //assim que carregar componente cria obj 
    this.tarefa = new Tarefa();
  }
  //cadastra e redireciona para tarefas
  cadastrar():void{
    if(this.formTarefa.form.valid){
      //chama o servico d  cadastrar e passa 
      this.tarefaService.cadastrar(this.tarefa);
      // so troca o conteudo da apliacao com navigate
      this.router.navigate(["/tarefas"]);
    }//if
  }//cadast

}
