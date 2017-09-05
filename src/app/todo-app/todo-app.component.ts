import { Component, OnInit } from '@angular/core';
import { Todo } from "../todo.model";
import { TodoManagerService } from "../todo-manager.service";
import { TodoApiService } from "../todo-api.service";

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
    this.todoAPI.addTodo(this.newTodo)
      .subscribe(todo => {
        this.todoService.addTodo(todo);
      })
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo: Todo) {
    todo.completed = !todo.completed
    this.todoAPI.updateTodoById(todo.id, todo)
      .subscribe(resTodo => {
        this.todoService.toggleTodoComplete(resTodo)
      })
  }

  removeTodo(todo) {
    this.todoAPI.deleteTodoById(todo.id)
      .subscribe(res => {
        this.todoService.deleteTodoById(todo.id)
      })
  }

  loadData() {
    this.todoAPI.getAllTodos()
      .subscribe(res => {
        this.todoService.todos = res
      })
  }

  get todos(){
    return this.todoService.getAllTodos();
  }

}
