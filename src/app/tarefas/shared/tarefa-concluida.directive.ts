import { Directive, ElementRef, Input, OnInit } from '@angular/core';

//parece componente ,mas diretiva cria 'propriedade'. e o componente cria 'seletor'
@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  //traz o elemento pra ter uma referencia pra saber onde aplica diretiva
  //cria o @input,deve ser igual ao seletor,boa pratica
  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }
  //criamos o NgOnInit
  ngOnInit() {
    if (this.tarefaConcluida) {
      //aplica no elemento ,stylo de linha atravez (line-through)
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }

}//export
