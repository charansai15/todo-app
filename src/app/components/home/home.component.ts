// Import the core Component decorator from Angular
import { Component } from '@angular/core';
// Import the Router service for navigation
import { Router } from '@angular/router';

// Component decorator that defines metadata for the HomeComponent
@Component({
  // The HTML selector used to insert this component
  selector: 'app-home',
  // Template definition using template literal syntax
  template: `
    <!-- Main container div for the home page -->
    <div class="home-container">
      <!-- Main heading of the page -->
      <h1>Welcome to Task Manager</h1>
      <!-- Container for action buttons -->
      <div class="button-container">
        <!-- Primary button that triggers task creation navigation -->
        <button class="primary-button" (click)="navigateToCreateTask()">Create New Task</button>
        <!-- Secondary button that triggers task list navigation -->
        <button class="secondary-button" (click)="navigateToTaskList()">View Task List</button>
      </div>
    </div>
  `,
  // Component styles using template literal syntax
  styles: [`
    /* Styles for the main container */
    .home-container {
      text-align: center;
      padding: 3rem;
      max-width: 800px;
      margin: 0 auto;
    }
    /* Styles for the main heading */
    h1 {
      color: #2c3e50;
      margin-bottom: 2rem;
    }
    /* Styles for the button container using flexbox */
    .button-container {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-top: 2rem;
    }
    /* Common styles for both primary and secondary buttons */
    .primary-button, .secondary-button {
      padding: 1rem 2rem;
      font-size: 1.1rem;
      cursor: pointer;
      border-radius: 4px;
      border: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    /* Specific styles for the primary button */
    .primary-button {
      background-color: #007bff;
      color: white;
    }
    /* Specific styles for the secondary button */
    .secondary-button {
      background-color: #6c757d;
      color: white;
    }
    /* Hover effects for both button types */
    .primary-button:hover, .secondary-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  `]
})
// Definition of the HomeComponent class
export class HomeComponent {
  // Constructor that injects the Router service
  constructor(private router: Router) {}

  // Method to navigate to the create task page
  navigateToCreateTask() {
    this.router.navigate(['/create-task']);
  }

  // Method to navigate to the task list page
  navigateToTaskList() {
    this.router.navigate(['/tasks']);
  }
} 