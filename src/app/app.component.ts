import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUsername: string;
  isAuthVisible: boolean;

  constructor() {
    this.currentUsername = 'Daniel';
    this.isAuthVisible = true;
  }

  isAuthVisibleToggle() {
    this.isAuthVisible = !this.isAuthVisible;
  }

  onUserChanged(username: string) {
    this.currentUsername = username;
  }

}
