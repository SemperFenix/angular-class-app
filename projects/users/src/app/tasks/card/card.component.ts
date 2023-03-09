import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'sdi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('item') task!: Task;
  @Output() onDelete: EventEmitter<number>; // Esto es una declaraci'on de tipo
  @Output() onChange: EventEmitter<Task>;
  constructor() {
    this.onDelete = new EventEmitter();
    this.onChange = new EventEmitter();
  }

  handleDelete() {
    console.log('Borrando ', this.task.id);

    this.onDelete.next(this.task.id); // next y emit son lo mismo, aunque next es el original y emit un alias
  }

  handleChange() {
    console.log(this.task.isCompleted);
    this.task.isCompleted = !this.task.isCompleted;
    this.onChange.next(this.task);
  }
}
