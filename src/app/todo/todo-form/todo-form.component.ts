import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from '../../interfaces/common.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @ViewChild('f') form!: NgForm;

  @Output() addTaskEvent = new EventEmitter();

  constructor(private todoService: TodoService) {}

  addTask() {
    console.log(this.form);
    this.todoService.createTask(this.form.value).subscribe(() => {
      this.todoService.getTasks().subscribe((response: any) => {
        const tasks = this.todoService.getTasksList(response);

        this.addTaskEvent.emit(tasks);
        this.form.resetForm();
      });
    });
  }
}
