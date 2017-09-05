import { Component, OnInit } from '@angular/core';
import { TodoManagerService } from "../todo-manager.service";

@Component({
  selector: 'app-todo-history',
  templateUrl: './todo-history.component.html',
  styleUrls: ['./todo-history.component.css']
})
export class TodoHistoryComponent implements OnInit {

  constructor(
    private todoService: TodoManagerService,
  ) { }

  ngOnInit() {
  }

  get todos() {
    return this.todoService.getAllTodos()
      .filter(item => item.completed)
  }
}
