import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CalculadoraComponent
  ], 
  providers:[
    CalculadoraService //adicionado providers
  ]
})
export class CalculadoraModule { }
