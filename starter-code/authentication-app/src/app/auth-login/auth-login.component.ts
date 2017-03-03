import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
  providers: [SessionService]
})
export class AuthLoginComponent implements OnInit {
  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: string;

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  logIn() {
  this.session.login(this.formInfo)
    .subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }
}
