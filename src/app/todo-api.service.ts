import { Injectable } from '@angular/core';
import { Todo } from "./todo.model";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class TodoApiService {

  constructor(private http: Http) { }

  addTodo(todo: Todo) {
    return this.http.post(`http://localhost:3000/todos`, todo)
      .map(res => res.json())
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number) {
    return this.http.delete(`http://localhost:3000/todos/${id}`)
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Observable<Todo> {
    return this.http.put(`http://localhost:3000/todos/${id}`, values)
      .map(res => res.json())
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.http.get("http://localhost:3000/todos")
      .map(res => res.json())
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Observable<Todo> {
    return this.http.get(`http://localhost:3000/todos/${id}`)
      .map(res => res.json())
  }

}
