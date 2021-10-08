import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TarefaService,Tarefa } from '../shared';
//activateroute,e pra capturar o id pela rota
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa',{static:true})formTarefa: NgForm;
  tarefa:Tarefa;

  constructor(private tarefaService:TarefaService,
    private route:ActivatedRoute,
    private router:Router) { }

    //quando componente entrar na atividade
  ngOnInit(): void {
    //usa o activateroute para capturar o parametro id
    //snapshot, funcao do activated,que captura o id do pametro
    //usa o '+', que converte em numero  o id,senao nao funciona o editar e nao mostra os valores
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }
  atualizar():void{
    //se form for valido.atualiza
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      //navega ate rota de tarefas
      this.router.navigate(['/tarefas']);
    }
  };

}//export
