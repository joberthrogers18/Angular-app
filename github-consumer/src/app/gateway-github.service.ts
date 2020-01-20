import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatewayGithubService {
  private apiUrl: string = 'https://api.github.com'

  constructor(private http: HttpClient) { }

  getUserInfo(name: string): Observable<any>  {
    return this.http.get(`${this.apiUrl}/users/${name}`);
  }
}
