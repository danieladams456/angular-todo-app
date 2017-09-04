import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListViewerComponent } from './components/todo-list-viewer/todo-list-viewer.component';

import { TodoListDataService } from './services/todo-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
