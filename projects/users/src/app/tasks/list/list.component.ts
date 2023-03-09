import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { getTasks } from '../services/mock.data';

@Component({
  selector: 'sdi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }
  // Esto es el equivalente al useEffect, va a ejecutarse cada vez que se llama al componente
  async ngOnInit(): Promise<void> {
    this.tasks = await getTasks();
    console.log(this.tasks);
  }
  handleDelete(taskId: number) {
    this.tasks = this.tasks.filter((item) => {
      item.id !== taskId;
    });
  }
  handleChange(task: Task) {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
    console.log(this.tasks);
  }
}
