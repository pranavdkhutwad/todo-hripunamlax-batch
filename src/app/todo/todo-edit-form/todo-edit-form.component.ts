import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validatePriority } from '../validators/priority.validator';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-edit-form',
  templateUrl: './todo-edit-form.component.html',
  styleUrls: ['./todo-edit-form.component.css']
})
export class TodoEditFormComponent implements OnInit {
  editForm!: FormGroup;
  @Input() task: any;
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();

  imgUrl: string = 'https://images.unsplash.com/photo-1640622307877-1e40352b9a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private todoService: TodoService) { }

  ngOnInit(): void {
    // this.editForm = new FormGroup({
    //   name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
    //   desc: new FormControl('', Validators.required),
    //   priority: new FormControl('', Validators.compose([Validators.required, validatePriority]))
    // });

    this.editForm = this.fb.group({
      name: [this.task.name, Validators.compose([Validators.required, Validators.minLength(3)])],
      desc: [this.task.desc, Validators.required],
      priority: [this.task.priority, Validators.compose([Validators.required, validatePriority])]
    });

    // To set form values with setValue() method.
    // this.editForm.setValue({
    //   name: this.task.name,
    //   desc: this.task.desc,
    //   priority: this.task.priority
    // });

    // To set form values partially.
    // this.editForm.patchValue({
    //   name: 'ganesh'
    // });

  }

  editTask() {
   this.todoService.updateTask(this.editForm.value, this.task.id).subscribe(() => {
    this.todoService.getTasks().subscribe((response) => {
      const tasks = this.todoService.getTasksList(response);

      this.editEvent.emit(tasks);
      this.activeModal.close('Edit Success');
    });
   });

   
  }
}
