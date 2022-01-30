import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TodoEditFormComponent } from '../todo-edit-form/todo-edit-form.component';

import { Task } from 'src/app/interfaces/common.interface';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  @Input() task?: Task;
  @Output() deleteEvent: EventEmitter<Task[]> = new EventEmitter<Task[]>();
  @Output() editEvent: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  constructor(private todoService: TodoService, private modalService: NgbModal) { }

  getCardBorder(priority: number | null | undefined) {
    return this.todoService.getBorder(priority);
  }
  
  openEditModal(task: any) {
    const modalRef = this.modalService.open(TodoEditFormComponent);
    modalRef.componentInstance.task = task;
    modalRef.componentInstance.editEvent.subscribe((tasks: any) => {
      this.editEvent.emit(tasks);
    })
  }

  deleteTask(id: string | undefined) {
    this.todoService.deleteTask(id).subscribe((response: any) => {
      this.todoService.getTasks().subscribe((response) => {
        const tasks = this.todoService.getTasksList(response);

        this.deleteEvent.emit(tasks);
      });
    });
  }
} 
