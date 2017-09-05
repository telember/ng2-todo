import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HttpModule } from '@angular/http';
import { TodoHistoryComponent } from './todo-history/todo-history.component';
import { TodoManagerService } from "./todo-manager.service";
import { RouterModule }   from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TodoAppComponent
      },
      {
        path: 'history',
        component: TodoHistoryComponent
      }
    ])
  ],
  providers: [TodoManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
