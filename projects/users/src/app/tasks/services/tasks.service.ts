import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../models/task.model';
import { getTasks } from './mock.data';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks$: BehaviorSubject<Task[]>;
  constructor() {
    const initialTasks: Task[] = [];
    this.tasks$ = new BehaviorSubject(initialTasks);
    getTasks().then((tasks) => this.tasks$.next(tasks));
  }

  greatings() {
    console.log('hola');
  }
}
