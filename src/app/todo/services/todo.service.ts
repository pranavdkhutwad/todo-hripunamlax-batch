import { Task } from '../../interfaces/common.interface';

export class TodoService {

    private name: string = 'Ganesh';

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