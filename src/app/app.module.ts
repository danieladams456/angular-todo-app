import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListViewerComponent } from './components/todo-list-viewer/todo-list-viewer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { TodoListDataService } from './services/todo-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListViewerComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
