import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: any = {};

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const taskId = this.route.snapshot.params['id'];

    this.fetchTaskDetails(taskId);
  }

  onSubmit() {
    this.updateTask(this.task);
    this.router.navigate(['/']);
  }

  fetchTaskDetails(taskId: string) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.task = storedTasks.find((task: any) => task.id === taskId);
  }

  updateTask(updatedTask: any) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.map((task: any) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

}
