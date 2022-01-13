import { Component, EventEmitter, Output } from '@angular/core';

import { Task } from '../../interfaces/common.interface';

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

  addTask() {
    this.addTaskEvent.emit(this.task);
  }
}
