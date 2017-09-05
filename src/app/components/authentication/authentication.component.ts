import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
  // styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  model: UsernamePasswordModel;
  username: string;
  password: string;
  
  // Emits a username when someone is signed in, null when no one is
  @Output() onUserChanged = new EventEmitter<string>();
  constructor() {
    this.model = new UsernamePasswordModel('user', 'pass');
  }

  ngOnInit() {
  }

  doLogIn() {
    console.log('user changed to colton');
    this.onUserChanged.emit('colton');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

export class UsernamePasswordModel {
  // username: string;
  // password: string;
  constructor(
    public username: string,
    public password: string
  ) {}
}
