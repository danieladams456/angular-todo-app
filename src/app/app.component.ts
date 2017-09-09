import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUsername: string;

  constructor() {
  }

  get isAuthenticated() {
    return this.currentUsername != null && this.currentUsername !== '';
  }
}
