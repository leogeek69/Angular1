import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service';
import { RouterLink } from '@angular/router';

export interface Task {
  nom: string,
  etat: boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})


export class TaskList {
  private taskService = inject(TaskService);

  tasks = this.taskService.tasks
  newTask = this.taskService.newTask

  addTask(){
    this.taskService.addTask();
  }
  
  spliceTasks(index: number){
    this.taskService.spliceTasks(index);
  }
}
