import { Component } from '@angular/core';
import { Task } from '../interfaces/common.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  highPriorityList: Task[] = [];
  mediumPriorityList: Task[] = [];
  lowPriorityList: Task[] = [];

  constructor(private todoService: TodoService) { }
  getTask(task: Task) {
    switch(task.priority) {
      case 1: {
        // add in high priority list.
        this.highPriorityList = this.todoService.getList(task, this.highPriorityList);
        break;
      }
      case 2: {
        // add in medium priority list.
        this.mediumPriorityList = this.todoService.getList(task, this.mediumPriorityList);
        break;
      }
      case 3: {
        // add in low priority list.
        this.lowPriorityList = this.todoService.getList(task, this.lowPriorityList);
        break;
      }
      default: {
        console.log('Unknown priority...');
      }
    }
  }
}
