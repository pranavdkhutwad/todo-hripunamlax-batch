import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() highList?: Task[];
  @Input() mediumList?: Task[];
  @Input() lowList?: Task[];
}
