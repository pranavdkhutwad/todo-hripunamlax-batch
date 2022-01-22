import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() deleteEvent: EventEmitter<Task[]> = new EventEmitter<Task[]>();
  

  captureDeleteTask(tasks: Task[]) {
    this.deleteEvent.emit(tasks);
  }
}
