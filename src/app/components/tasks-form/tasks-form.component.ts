// Import required Angular and custom modules
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../constants/tasks.interface';
import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
})
export class TasksFormComponent implements OnInit, OnDestroy {
  // Array to store all tasks
  tasks: Task[] = [];
  private tasksSub: Subscription;

  // Object to store new task data with default values
  newTask: Task = {
    name: '',
    description: '',
    completed: false,
    important: false,
    overdue: false,
    priority: 'normal'
  };

  // Inject TaskService and Router in the constructor
  constructor(private taskService: TaskService, private router: Router) {}

  // Lifecycle hook that runs when component initializes
  ngOnInit() {
    this.tasksSub = this.taskService.tasks$.subscribe(
      tasks => this.tasks = tasks
    );
  }

  ngOnDestroy() {
    if (this.tasksSub) {
      this.tasksSub.unsubscribe();
    }
  }

  // Method to add a new task
  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = {
      name: '',
      description: '',
      completed: false,
      important: false,
      overdue: false,
      priority: 'normal'
    };
  }

  updateTaskStatus(task: Task) {
    const updatedTask = { ...task, completed: !task.completed };
    this.taskService.updateTask(updatedTask);
  }

  deleteTask(id: number) {
    const taskToDelete = this.tasks.find(t => t.id === id);
    if (taskToDelete) {
      this.taskService.removeTask(taskToDelete);
    }
  }
}
