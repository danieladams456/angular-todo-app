import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListViewerComponent } from './todo-list-viewer.component';

describe('TodoListViewerComponent', () => {
  let component: TodoListViewerComponent;
  let fixture: ComponentFixture<TodoListViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
