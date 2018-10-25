import { Component, OnInit } from '@angular/core';

import {Frase} from  '../shared/frase.model'
import {FRASES} from './frases-mock'
import {TentativasComponent} from '../tentativas/tentativas.component'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  
  public instrucao: string = 'Traduza a frase:'
  public frases: Array<Frase> = FRASES
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 3

  public tentativas: number = 3

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizarResposta(resposta: Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value // precisa usar desse jeito no event bind para capturar o valor do estado do DOM
  }

  public verificarResposta():void{
    if(this.resposta == this.frases[this.rodada].frasePtBr){
      this.progresso = this.progresso + 25 // atualiza progresso da barra
      this.rodada++ // atualiza variavel rodada
      this.atualizaRodada()
    }
    else
    {
      //decrementa a variavel tentativas
      this.tentativas--
    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada] // define a frase da rodada
    this.resposta = '' // limpa a variavel do usuário
  }

}
