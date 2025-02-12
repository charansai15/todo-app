// Import Component decorator from Angular core
import { Component } from '@angular/core';
// Import Router service for navigation
import { Router } from '@angular/router';

// Component decorator defining metadata
@Component({
  // Selector used to insert this component in templates
  selector: 'app-navbar',
  // Template definition using template literal syntax
  template: `
    <nav class="navbar">
      <!-- Brand section with separate logo link and text -->
      <div class="nav-brand">
        <!-- Logo image linking to hippieproject.com -->
        <a href="https://hippieproject.com/" target="_blank" class="logo-link">
          <img src="assets/logo.png" alt="Hippie Project Logo" class="nav-logo">
        </a>
        <!-- App title with home navigation -->
        <span class="brand-text" (click)="navigateHome()">Task Manager</span>
      </div>
      <!-- Container for navigation buttons -->
      <div class="nav-links">
        <!-- Home navigation button -->
        <button class="nav-button" (click)="navigateHome()">Home</button>
        <!-- Tasks list navigation button -->
        <button class="nav-button" (click)="navigateToTasks()">Tasks</button>
        <!-- Create task navigation button -->
        <button class="nav-button" (click)="navigateToCreateTask()">New Task</button>
      </div>
    </nav>
  `,
  // Component styles using template literal syntax
  styles: [`
    /* Main navbar container styles */
    .navbar {
      background-color: #2c3e50;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    /* Brand section styles */
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    /* Logo link styles */
    .logo-link {
      display: flex;
      align-items: center;
      transition: opacity 0.2s;
    }
    /* Logo link hover effect */
    .logo-link:hover {
      opacity: 0.8;
    }
    /* Logo image styles */
    .nav-logo {
      height: 2.5rem;
      width: auto;
    }
    /* Brand text styles */
    .brand-text {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      margin-left: 0.5rem;
      transition: opacity 0.2s;
    }
    /* Brand text hover effect */
    .brand-text:hover {
      opacity: 0.8;
    }
    /* Navigation links container styles */
    .nav-links {
      display: flex;
      gap: 1rem;
    }
    /* Navigation button styles */
    .nav-button {
      background-color: transparent;
      color: white;
      border: 1px solid white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    /* Hover effect for navigation buttons */
    .nav-button:hover {
      background-color: white;
      color: #2c3e50;
    }
  `]
})
// NavbarComponent class definition
export class NavbarComponent {
  // Constructor with Router service injection
  constructor(private router: Router) {}

  // Method to navigate to home page
  navigateHome() {
    this.router.navigate(['/']);
  }

  // Method to navigate to tasks list page
  navigateToTasks() {
    this.router.navigate(['/tasks']);
  }

  // Method to navigate to create task page
  navigateToCreateTask() {
    this.router.navigate(['/create-task']);
  }
}
