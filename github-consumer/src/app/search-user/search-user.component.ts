import { Component, OnInit } from '@angular/core';
import { GatewayGithubService } from '../gateway-github.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  username = '';
  usernameInfo;

  constructor(
    private gateway: GatewayGithubService,
  ) { }

  ngOnInit() {
  }

  onChange() {
    console.log(this.username);
  }

  onClick() {
    console.log(this.username);
  }

  fetchInfoUser() {
    this.gateway.getUserInfo(this.username).subscribe(
      info => {
        console.log(info);
      }
    )
  }
}
