import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user;

  constructor(private router: Router) { }

  ngOnInit() {
    let userInfo = window.history.state.user;

    if(!userInfo){
      this.router.navigate(['/404-error'])
    }

    console.log(userInfo);
    this.user = userInfo;
  }

}
