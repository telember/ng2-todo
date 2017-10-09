import { Component, OnInit } from '@angular/core';

import { TodoManagerService } from "../todo-manager.service";
import { TodoApiService } from "../todo-api.service";
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  providers: [TodoApiService]
})
export class TodoAppComponent implements OnInit {
  ngOnInit(): void {
    console.log("init");
    this.loadData();
  }

  newTodo: Todo = new Todo();
  constructor(
    private todoService: TodoManagerService,
    private todoAPI: TodoApiService
  ) {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo: Todo) {
    todo.completed = !todo.completed
    console.log(todo.completed);
    
    this.todoService.toggleTodoComplete(todo)
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id)
  }

  loadData() {
    // this.todoAPI.getAllTodos()
    //   .subscribe(res => {
    //     this.todoService.todos = res
    //   })
  }

  get todoNotComplete(){
   return this.todoService.getAllTodos()
      .filter(item => !item.completed)
  }

  get todos(){
    return this.todoService.getAllTodos();
  }

}
