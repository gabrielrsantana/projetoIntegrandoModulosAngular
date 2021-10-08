import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';
//declando global a variavel google,que nao tem haver com a api do google
declare var google:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dados:any;

  constructor(private dadosService:DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        //chama init e espera carregar a api
        this.init();
      }
    );//this.dados.service
  }

  //criado depois de todos os outros metodos,ex piechart,
  exibirGraficos():void{
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirDonutChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();

  }

  //inicializa a API de gra ficos
  init():void{
    //primeira vez ela é undefined
    if(typeof(google)!=='undefined'){
       // Load the Visualization API and the corechart package.
       google.charts.load('current', {'packages':['corechart']});
       setTimeout(()=>{
        google.charts.setOnLoadCallback(this.exibirGraficos());
       },1000);
    }

  }//init

  exibirColumnChart():void{
    const el = document.getElementById('column_chart');//passa o tipo de grafico
    const chart = new google.visualization.ColumnChart(el);
    const opcoes = this.obterOpcoes();
    chart.draw(this.obterDataTable(),this.obterOpcoes());

  }//exibir donut



  exibirLineChart():void{
    const el = document.getElementById('line_chart');//passa o tipo de grafico
    const chart = new google.visualization.LineChart(el);
    const opcoes = this.obterOpcoes();
        
    chart.draw(this.obterDataTable(),this.obterOpcoes());

  }//exibir donut


  exibirBarChart():void{
    const el = document.getElementById('bar_chart');//passa o tipo de grafico
    const chart = new google.visualization.BarChart(el);
    const opcoes = this.obterOpcoes();
    
    //só passa o opcoes para desenhar em 3D,porque habilitou na APi
    //como se criasse uma linha a mais em opcoes,,alem do width e height
    chart.draw(this.obterDataTable(),this.obterOpcoes());

  }//exibir donut


  exibirDonutChart():void{
    const el = document.getElementById('donut_chart');//passa o tipo de grafico
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();
    //formato na api is3D,habilitando donut
    //0.4 tamanho do buraco no grafico
    opcoes['pieHole']=0.4;

    //só passa o opcoes para desenhar em 3D,porque habilitou na APi
    //como se criasse uma linha a mais em opcoes,,alem do width e height
    chart.draw(this.obterDataTable(),opcoes);

  }//exibir donut


  //retorna grafico pie chart,usando o id do html
  exibirPieChart():void{
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);
    //passa as funcoes criadas abaixo para construir o grafico
    chart.draw(this.obterDataTable(),this.obterOpcoes());

  }//exibir Piechart

  exibir3dPieChart():void{
    const el = document.getElementById('3d_pie_chart');//passa o tipo de grafico
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();
    //formato na api is3D,habilitando 3d
    opcoes['is3D']=true;

    //só passa o opcoes para desenhar em 3D,porque habilitou na APi
    //como se criasse uma linha a mais em opcoes,,alem do width e height
    chart.draw(this.obterDataTable(),opcoes);

  }//exibir Piechar


  obterDataTable():any{
    const data = new google.visualization.DataTable();
    data.addColumn('string','mes');
    data.addColumn('number','Quantidade');
    data.addRows(this.dados);
    
    //retorna os dados formatados
    return data;
  }//datatable

  obterOpcoes():any{
    return{
      'title':'Quantidade de cadastro primeiro semestre',
      'width':'400',
      'height':'300'
    };
  };//obter opcoes
  
}//exports
