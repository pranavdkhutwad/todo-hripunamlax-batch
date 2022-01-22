import { Component, EventEmitter, Output } from '@angular/core';

import { Task } from '../../interfaces/common.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  task: Task = {
    name: '',
    desc: '',
    priority: null
  };

  @Output() addTaskEvent = new EventEmitter();

  constructor(private todoService: TodoService) {}

  addTask() {

    this.todoService.createTask(this.task).subscribe(() => {
      this.todoService.getTasks().subscribe((response: any) => {
        const tasks = this.todoService.getTasksList(response);

        this.addTaskEvent.emit(tasks);
      });
    });


    
  }
}
