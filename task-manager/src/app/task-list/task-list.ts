import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks: string[] = [
    'manger',
    'boire (de leau)',
    'dormi'
  ]
  newTask = signal("");
  addTask() {
    this.tasks.push(this.newTask());
  };

  delTask() {
    this.tasks.pop();
  };

  spliceTasks(index: number) {
    this.tasks.splice(index, 1);
  }
}
