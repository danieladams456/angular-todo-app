import { Component, OnInit } from '@angular/core';
import { TodoList } from '../../models/todo-list';
import { TodoListDataService } from '../../services/todo-list-data.service';

@Component({
  selector: 'app-todo-list-viewer',
  templateUrl: './todo-list-viewer.component.html'
  // styleUrls: ['./todo-list-viewer.component.css']
})
export class TodoListsViewerComponent implements OnInit {

  todoLists: TodoList[] = [];
  constructor(private dataService: TodoListDataService) { }

  ngOnInit() {
    // load the interface model into displayable objects
    this.dataService.getLists().forEach(element => {
      this.todoLists.push(element);
    });
    console.log('TodoListComponent list: ', this.todoLists);
  }
}
