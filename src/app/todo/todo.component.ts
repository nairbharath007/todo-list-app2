import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required]
    });
  }

  tasks: string[] = [];

  addTask() {
    const task = this.todoForm.get('task')!.value;
    this.tasks.push(task);
    this.todoForm.reset();
  }

  deleteTask(task: string) {
    // this.tasks = this.tasks.filter(t => t !== task);
    const index = this.tasks.indexOf(task);
  if (index !== -1) {
    this.tasks.splice(index,1);
  }
  }

}
