import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
  // styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  model: UsernamePasswordModel;

  // Emits a username when someone is signed in, null when no one is
  @Output() onUserChanged = new EventEmitter<string>();

  constructor() {
    this.model = new UsernamePasswordModel('', '');
  }

  ngOnInit() {
  }

  doLogIn() {
    console.log('user changed to', this.model.username);
    this.onUserChanged.emit(this.model.username);
  }
}

export class UsernamePasswordModel {
  // username: string;
  // password: string;
  constructor(
    public username: string,
    public password: string
  ) {}
}
