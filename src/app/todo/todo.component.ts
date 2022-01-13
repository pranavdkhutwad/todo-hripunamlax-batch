import { Component } from '@angular/core';
import { Task } from '../interfaces/common.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  highPriorityList: Task[] = [];

  getTask(task: Task) {
    this.highPriorityList = [...this.highPriorityList, { ...task }];
  }
}
