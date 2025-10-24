
export enum Status {
  Pending = 'pending',
  InProgress = 'in-progress',
  Completed = 'completed',
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export interface Task {
  taskId: string;
  title: string;
  description?: string;
  status: Status;
  priority: Priority;
  dueDate?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}
