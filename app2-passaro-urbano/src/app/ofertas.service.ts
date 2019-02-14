import {Oferta} from './shared/oferta.model';
import {HttpClient} from '@angular/common/http';

import {Injectable} from '@angular/core';


@Injectable() // How we want use Http we use injectable for inject a service in another
export class OfertasService {

    public ofertas: Array<Oferta>; 

    constructor (public http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {

        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise() // how the return is a observable and we want a promise we need this to transform
        .then((response:any ) => response)
    }
} 