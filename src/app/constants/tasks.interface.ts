// Interface defining the structure of a Task object
export interface Task {
  id?: number;     // Added optional id field for task identification
  name: string;    // Kept name field, removed title since we're using name consistently
  description: string;
  completed: boolean;
  important: boolean;   // Added for important task styling/flagging
  overdue: boolean;    // Added for overdue task styling/flagging
  priority: string;  // Added priority property
}

