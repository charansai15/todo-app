// Import Injectable decorator from Angular core
import { Injectable } from '@angular/core';
// Import Task interface for type checking
import { Task } from '../constants/tasks.interface';

// Injectable decorator marks this service as available for dependency injection
@Injectable({
  // Service is provided at the root level, making it a singleton
  providedIn: 'root'
})
// Service class definition
export class TaskService {
  // Private array to store tasks
  private tasks: Task[] = [];
  // Private counter for generating unique task IDs
  private nextId = 1;

  // Method to get all tasks
  getTasks(): Task[] {
    // Return the tasks array
    return this.tasks;
  }

  // Method to add a new task
  addTask(task: Task): void {
    // Assign a unique ID to the task
    task.id = this.nextId++;
    // Set the name property to match the title
    task.name = task.title; // Sync name and title
    // Add the task to the array
    this.tasks.push(task);
  }

  // Method to remove a task
  removeTask(task: Task): void {
    // Find the index of the task with matching ID
    const index = this.tasks.findIndex(t => t.id === task.id);
    // If task is found (index !== -1), remove it from the array
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
} 