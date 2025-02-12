// Import testing utilities from Angular core testing module
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component to be tested
import { NavbarComponent } from './navbar.component';

// Main test suite for NavbarComponent
describe('NavbarComponent', () => {
  // Declare variables for component instance and fixture
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  // Async setup before each test
  beforeEach(async () => {
    // Configure the testing module with required declarations
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    // Compile all the declared components
    .compileComponents();
  });

  // Synchronous setup before each test
  beforeEach(() => {
    // Create a component fixture
    fixture = TestBed.createComponent(NavbarComponent);
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
