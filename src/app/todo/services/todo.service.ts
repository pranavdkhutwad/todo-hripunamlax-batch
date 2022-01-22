import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../../interfaces/common.interface';

@Injectable()
export class TodoService {

    private name: string = 'Ganesh';

    constructor(private http: HttpClient) {}

    getTasksList(obj: any) {
        let arr = [];

        for (let key in obj) {
            arr.push({...obj[key], id: key});
        }

        return arr;
    }

    getListCategories(list: Task[]) {
        const highPriorityList = list.filter((task: Task) => task.priority === 1);
        const mediumPriorityList = list.filter((task: Task) => task.priority === 2);
        const lowPriorityList = list.filter((task: Task) => task.priority === 3);

        return {
            highPriorityList,
            mediumPriorityList,
            lowPriorityList
        };
        
    }

    createTask(task: Task) {
        return this.http.post('https://todos-832e5-default-rtdb.firebaseio.com/todos.json', task);
    }

    getTasks() {
        return this.http.get('https://todos-832e5-default-rtdb.firebaseio.com/todos.json');
    }

    deleteTask(id: string | undefined) {
        return this.http.delete(`https://todos-832e5-default-rtdb.firebaseio.com/todos/${id}.json`);
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getList(task: Task, list: Task[]): Task[] {
        return [...list, { ...task }];
    }

    getBorder(priority: number | null | undefined) {
        if (priority === 1) {
          return 'border-danger';
        }
    
        if (priority === 2) {
          return 'border-warning';
        }
    
        return 'border-info';
    }
}