import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/task.model';
import { getTasks } from './mock.data';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks$: Subject<Task[]>;
  constructor() {
    this.tasks$ = new Subject();
    getTasks().then((tasks) => this.tasks$.next(tasks));
  }

  greatings() {
    console.log('hola');
  }
}
