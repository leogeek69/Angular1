import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Task } from './task-list/task-list';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { nom: "Manger", etat: true },
    { nom: "Dormir", etat: false },
    { nom: "Ira Domini", etat: true }
  ]
  newTask = signal("");

  addTask() {
    this.tasks.push({
      nom: this.newTask(),
      etat: false
    });
  };

  spliceTasks(index: number) {
    this.tasks.splice(index, 1);
  }

  getTasks(){

  }
}


