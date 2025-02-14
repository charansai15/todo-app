// Import Injectable decorator from Angular core
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../constants/tasks.interface';

// Injectable decorator marks this service as available for dependency injection
@Injectable({
  // Service is provided at the root level, making it a singleton
  providedIn: 'root'
})
// Service class definition
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;
  
  // Create a BehaviorSubject with initial empty array
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  // Public observable that components can subscribe to
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    // Load initial tasks from localStorage if any
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      this.tasksSubject.next(this.tasks);
      this.nextId = Math.max(...this.tasks.map(t => t.id || 0)) + 1;
    }
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  addTask(task: Task): void {
    task.id = this.nextId++;
    this.tasks.push(task);
    this.tasksSubject.next([...this.tasks]);
    this.saveTasksToStorage();
  }

  removeTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.tasksSubject.next([...this.tasks]);
      this.saveTasksToStorage();
    }
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      this.tasksSubject.next([...this.tasks]);
      this.saveTasksToStorage();
    }
  }

  private saveTasksToStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
} 