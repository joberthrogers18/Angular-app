import { Component, OnInit } from '@angular/core';

import {Frase} from  '../shared/frase.model'
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  
  public instrucao: string = 'Traduza a frase:'
  public frases: Array<Frase> = FRASES
  public resposta: string 

  constructor() { console.log(this.frases)}

  ngOnInit() {
  }

  public atualizarResposta(resposta: Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value // precisa usar desse jeito no event bind para capturar o valor do estado do DOM
    console.log(this.resposta)
  }

}
