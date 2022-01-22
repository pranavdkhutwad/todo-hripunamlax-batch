import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';

// Custom Directives.
import { TodoDirective } from './directives/todo.directive';
import { TodoIdDirective } from './directives/todo-id.directive';

// Custom Services.
import { TodoService } from './services/todo.service';

@NgModule({
    declarations: [
        TodoComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoTaskComponent,
        TodoDirective,
        TodoIdDirective
    ],
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [TodoService],
    exports: [TodoComponent]
})
export class TodoModule {

}