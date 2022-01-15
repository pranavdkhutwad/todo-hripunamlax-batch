import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/common.interface';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  @Input() task?: Task;

  constructor(private todoService: TodoService) { }

  getCardBorder(priority: number | null | undefined) {
    console.log('data ==>', this.todoService.getName());
    return this.todoService.getBorder(priority);
  }
  
} 
