import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask: any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    const taskId = uuidv4();

    // Assign the generated ID to the new task object
    this.newTask.id = taskId;

    const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    existingTasks.push(this.newTask);

    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    this.newTask = {};
     this.router.navigate(['/']);

  }

}
