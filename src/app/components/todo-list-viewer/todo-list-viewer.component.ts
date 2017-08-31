import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component'
import { TodoListDataService } from '../../services/todo-list-data.service';

@Component({
  selector: 'app-todo-list-viewer',
  templateUrl: './todo-list-viewer.component.html'
  // styleUrls: ['./todo-list-viewer.component.css']
})
export class TodoListViewerComponent implements OnInit {

  todoLists: TodoListComponent[];
  constructor(private dataService: TodoListDataService) { }

  ngOnInit() {
    console.log('got here');
    // load the interface model into displayable objects
    this.dataService.getLists().forEach(element => {
      this.todoLists.push(new TodoListComponent(element));
    });
    console.log('TodoListComponent list: ', this.todoLists);
  }
}
