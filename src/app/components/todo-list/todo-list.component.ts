import { Component, Input, OnInit } from '@angular/core';

import { TodoList } from '../../models/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
  // styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // This is passed in from parent object
  @Input() todoList: TodoList;

  constructor() { }

  ngOnInit() {
  }

}
