import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListsViewerComponent } from './components/todo-list-viewer/todo-list-viewer.component';

import { TodoListDataService } from './services/todo-list-data.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListsViewerComponent,
    TodoListComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
