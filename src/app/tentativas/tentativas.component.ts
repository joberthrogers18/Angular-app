import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public coracoes: Array<Coracao> = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes)
  }

  ngOnChanges(){ // sempre que ha mudança de estado no input ele dispara
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }
    console.log('tentativas recebidas do painel: ' + this.tentativas)
  }

  ngOnInit() { // metodo do ciclo de vida do componente, dispara apenas na criação do componente, funciona uma vez
  }

}
