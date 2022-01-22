import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  constructor(private todoService: TodoService) { }

  getCardBorder(priority: number | null | undefined) {
    return this.todoService.getBorder(priority);
  }
  
  deleteTask(id: string | undefined) {
    this.todoService.deleteTask(id).subscribe((response: any) => {
      this.todoService.getTasks().subscribe((response) => {
        const tasks = this.todoService.getTasksList(response);

        this.deleteEvent.emit(tasks);
      })
    });
  }
} 
