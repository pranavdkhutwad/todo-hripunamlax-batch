import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/common.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit  {
  highPriorityList: Task[] = [];
  mediumPriorityList: Task[] = [];
  lowPriorityList: Task[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTasks().subscribe((response: any) => {
      console.log('response from firebase ==>', response);
      const tasks = this.todoService.getTasksList(response);
      console.log('array of objects ==>', tasks);
      this.updateTodoCategories(tasks); 
    });
  }

  updateTodoCategories(tasks: Task[]) {
    const {
      highPriorityList,
      mediumPriorityList,
      lowPriorityList
    } = this.todoService.getListCategories(tasks);
    this.highPriorityList = highPriorityList;
    this.mediumPriorityList = mediumPriorityList;
    this.lowPriorityList = lowPriorityList;
  }
  
  getTasks(tasks: Task[]) {
    this.updateTodoCategories(tasks);
  }

  captureDeleteEvent(tasks: Task[]) {
    this.updateTodoCategories(tasks);
  }

  captureEditEvent(tasks: Task[]) {
    this.updateTodoCategories(tasks);
  }
}
