// Import testing utilities from Angular core testing
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component to be tested
import { TasksFormComponent } from './tasks-form.component';

// Main test suite for TasksFormComponent
describe('TasksFormComponent', () => {
  // Declare variables for component instance and fixture
  let component: TasksFormComponent;
  let fixture: ComponentFixture<TasksFormComponent>;

  // Async setup before each test
  beforeEach(async () => {
    // Configure the testing module with required declarations
    await TestBed.configureTestingModule({
      declarations: [ TasksFormComponent ]
    })
    // Compile all the declared components
    .compileComponents();
  });

  // Synchronous setup before each test
  beforeEach(() => {
    // Create a component fixture
    fixture = TestBed.createComponent(TasksFormComponent);
    // Get the component instance
    component = fixture.componentInstance;
    // Trigger initial data binding
    fixture.detectChanges();
  });

  // Test case to verify component creation
  it('should create', () => {
    // Assert that component instance exists
    expect(component).toBeTruthy();
  });
});
