import { Injectable } from '@angular/core';
import { TodoList } from '../models/todo-list';

const data = [
  {
      'title': 'test list 1',
      'items': [
          'one',
          'two'
      ]
  },
  {
      'title': 'test list 2',
      'items': [
          'three',
          'four'
      ]
  }
];

@Injectable()
export class TodoListDataService {

  constructor() { }

  getLists(): TodoList[] {
    return data;
  }
}
