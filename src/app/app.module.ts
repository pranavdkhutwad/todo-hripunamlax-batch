// Angular or Third party modules.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Custom Components.
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/header/app-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoTaskComponent } from './todo/todo-task/todo-task.component';

// Custom Directives.
import { TodoDirective } from './todo/directives/todo.directive';

// Custom Services.
import { TodoService } from './todo/services/todo.service';
import { TodoIdDirective } from './todo/directives/todo-id.directive';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoTaskComponent,
    TodoDirective,
    TodoIdDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
