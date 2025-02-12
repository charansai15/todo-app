// Import testing utilities from Angular core testing module
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the TasksListComponent to be tested
import { TasksListComponent } from './tasks-list.component';

// Main test suite for TasksListComponent
describe('TasksListComponent', () => {
  // Declare component instance variable
  let component: TasksListComponent;
  // Declare fixture for component testing
  let fixture: ComponentFixture<TasksListComponent>;

  // Async setup before each test case
  beforeEach(async () => {
    // Configure testing module with required components
    await TestBed.configureTestingModule({
      declarations: [ TasksListComponent ]
    })
    // Compile components in the testing module
    .compileComponents();
  });

  // Synchronous setup before each test case
  beforeEach(() => {
    // Create instance of component for testing
    fixture = TestBed.createComponent(TasksListComponent);
    // Get access to component instance
    component = fixture.componentInstance;
    // Trigger change detection
    fixture.detectChanges();
  });

  // Test case to verify component creation
  it('should create', () => {
    // Assert that component exists
    expect(component).toBeTruthy();
  });
});
