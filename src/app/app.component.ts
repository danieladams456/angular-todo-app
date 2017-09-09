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
    this.isAuthVisible = true;
  }

  isAuthVisibleToggle() {
    this.isAuthVisible = !this.isAuthVisible;
  }

  onUserChanged(username: string) {
    console.log('in root component on user changed method');
    this.currentUsername = username;
    this.isAuthVisible = username !== undefined;
  }

}
