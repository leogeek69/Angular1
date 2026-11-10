import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  constructor(private route: ActivatedRoute)
 {
 let id = Number(this.route.snapshot.paramMap.get('index'));
 }
}
