import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService] //instace of services in component
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertasService: OfertasService) { } //instace the service in variable to make the manipulation

  ngOnInit() {
    this.ofertas = this.ofertasService.getOfertas();
    console.log(this.ofertas);
  }

}