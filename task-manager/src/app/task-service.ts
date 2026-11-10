/*import { Injectable } from '@angular/core';
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
}*/

import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Task } from './task-list/task-list';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Récupère les tâches sauvegardées, ou met les 3 tâches par défaut si le localStorage est vide
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]').length > 0 
    ? JSON.parse(localStorage.getItem('tasks')!) 
    : [
        { nom: "Manger", etat: true },
        { nom: "Dormir", etat: false },
        { nom: "Ira Domini", etat: true }
      ];

  newTask = signal("");

  addTask() {
    this.tasks.push({
      nom: this.newTask(),
      etat: false
    });
    // Sauvegarde après l'ajout
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.newTask.set(""); 
  }

  spliceTasks(index: number) {
    this.tasks.splice(index, 1);
    // Sauvegarde après la suppression
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks() {
    return this.tasks;
  }
}



