import { Component, OnInit } from '@angular/core';
import { TodoList } from '../../models/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
  // styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: TodoList;

  constructor() {
  }

  ngOnInit() {
  }

  setTodo(todoList: TodoList) {
    console.log('in setTodo(), setting ', todoList.title);
    this.todoList = todoList;
  }
}
