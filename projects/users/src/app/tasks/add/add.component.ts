import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'sdi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  isDisplayForm: boolean;
  newTaskForm: FormGroup;
  @Output() onAdd: EventEmitter<Task>;
  constructor(public formBuilder: FormBuilder) {
    this.onAdd = new EventEmitter();
    // Esto es una inyecci'on de dependencia de un servicio de Angular precreado.
    this.isDisplayForm = false;
    this.newTaskForm = formBuilder.group({
      title: ['Nueva tarea', [Validators.required]], // Esto puede ser un string o un array con el valor por defecto y un array con los validadores
      owner: [''],
    });
  }

  handleSubmit() {
    const newTask: Task = {
      id: 3,
      title: this.newTaskForm.value.title,
      owner: this.newTaskForm.value.owner,
      isCompleted: false,
    };
    this.onAdd.next(newTask);
  }
}
