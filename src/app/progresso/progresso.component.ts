import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso: number = 0  // Com @Input esse atributo pode recebe valores de outros componentes pai

  constructor() { 
    console.log(this.progresso)
  }

  ngOnInit() {
  }

  public atualizaProgresso(progresso: number): void{
    this.progresso = progresso
  }

}
