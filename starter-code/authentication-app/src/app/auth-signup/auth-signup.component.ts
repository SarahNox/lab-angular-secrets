import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css'],
  providers: [SessionService]
})
export class AuthSignupComponent implements OnInit {

  formInfo = {
    username: '',
    password: '',
    name: '',
    secret: ''
  };

  user: any;
  error: string;

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  signUp(){
    this.session.signup(this.formInfo)
    .subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }
}
