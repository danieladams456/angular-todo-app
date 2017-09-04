import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
  // styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  // Emits a username when someone is signed in, null when no one is
  @Output() onUserChanged = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  doLogIn() {
    console.log('user changed to colton');
    this.onUserChanged.emit('colton');
  }
}
