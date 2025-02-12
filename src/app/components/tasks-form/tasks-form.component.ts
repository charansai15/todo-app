// Import Component decorator from Angular core
import { Component } from '@angular/core';
// Import Router for navigation functionality
import { Router } from '@angular/router';
// Import Task interface definition
import { Task } from '../../constants/tasks.interface';
// Import TaskService for managing tasks
import { TaskService } from '../../services/task.service';

// Component decorator with metadata
@Component({
  // Selector for using this component in templates
  selector: 'app-tasks-form',
  // Template definition using template literal syntax
  template: `
    <!-- Main container for the form -->
    <div class="form-container">
      <!-- Form title -->
      <h2>Create New Task</h2>
      <!-- Success message shown conditionally -->
      <div *ngIf="showSuccess" class="success-message">
        Task created successfully!
      </div>
      <!-- Form element with submit handler and template reference -->
      <form (ngSubmit)="onSubmit()" #taskForm="ngForm">
        <!-- Title input group -->
        <div class="form-group">
          <label for="title">Task Title:</label>
          <!-- Title input field with two-way binding -->
          <input 
            type="text" 
            id="title" 
            name="title" 
            [(ngModel)]="task.title" 
            required
            class="form-control">
        </div>
        <!-- Description input group -->
        <div class="form-group">
          <label for="description">Description:</label>
          <!-- Description textarea with two-way binding -->
          <textarea 
            id="description" 
            name="description" 
            [(ngModel)]="task.description"
            class="form-control">
          </textarea>
        </div>
        <!-- Submit button, disabled when form is invalid -->
        <button type="submit" [disabled]="!taskForm.form.valid">Create Task</button>
      </form>
    </div>
  `,
  // Component styles
  styles: [`
    /* Container styling */
    .form-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    /* Form group wrapper styles */
    .form-group {
      margin-bottom: 1rem;
    }
    /* Label styles */
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    /* Input and textarea base styles */
    .form-control {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    /* Specific textarea height */
    textarea.form-control {
      min-height: 100px;
    }
    /* Submit button styles */
    button {
      background-color: #007bff;
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    /* Button hover state */
    button:hover {
      background-color: #0056b3;
    }
    /* Disabled button state */
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    /* Success message styles */
    .success-message {
      background-color: #d4edda;
      color: #155724;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
  `]
})
// Component class definition
export class TasksFormComponent {
  // Initialize task object with default values
  task: Task = {
    id: 0,
    name: '',
    title: '',
    description: '',
    completed: false
  };
  // Flag for showing success message
  showSuccess = false;

  // Constructor with dependency injection
  constructor(
    private router: Router,
    private taskService: TaskService
  ) {}

  // Form submission handler
  onSubmit() {
    // Add task using service
    this.taskService.addTask(this.task);
    // Show success message
    this.showSuccess = true;
    // Reset form with default values
    this.task = {
      id: 0,
      name: '',
      title: '',
      description: '',
      completed: false
    };
    // Hide success message after delay
    setTimeout(() => this.showSuccess = false, 3000);
  }
}

