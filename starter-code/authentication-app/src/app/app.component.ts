import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "./session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SessionService ]
})
export class AppComponent implements OnInit {
  constructor(private session: SessionService) { }

  ngOnInit() {
    console.log(this.session.isLoggedIn());
  }
}
