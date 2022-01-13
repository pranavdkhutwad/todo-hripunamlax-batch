import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/common.interface';
@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  @Input() task?: Task;
}
