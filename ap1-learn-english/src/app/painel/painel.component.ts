import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import {Frase} from  '../shared/frase.model'
import {FRASES} from './frases-mock'
import {TentativasComponent} from '../tentativas/tentativas.component'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  
  public instrucao: string = 'Traduza a frase:'
  public frases: Array<Frase> = FRASES
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 3

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter(); // Emissão de evento, no caso queremos mandar quando o jogador perder ou ganhar

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    
  }

  public atualizarResposta(resposta: Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value // precisa usar desse jeito no event bind para capturar o valor do estado do DOM
  }

  public verificarResposta():void{
    if(this.resposta == this.frases[this.rodada].frasePtBr){
      this.progresso = this.progresso + (100/ FRASES.length) // atualiza progresso da barra
      this.rodada++ // atualiza variavel rodada

      //verificando se está na quarta rodada
      if(this.rodada == 4){
          this.encerrarJogo.emit('vitoria'); // mandando para o componente app
      }

      this.atualizaRodada()
    }
    else
    {
      //decrementa a variavel tentativas
      this.tentativas--

      if(this.tentativas == -1){
        this.encerrarJogo.emit('derrota'); // mandando para o componente app
      }
    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada] // define a frase da rodada
    this.resposta = '' // limpa a variavel do usuário
  }

}
