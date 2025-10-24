
import { Task, Status, Priority } from './types';

export const INITIAL_TASKS: Task[] = [
  {
    taskId: '1',
    title: 'Design UI Mockups',
    description: 'Create mockups for the new dashboard page using Figma.',
    status: Status.InProgress,
    priority: Priority.High,
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    tags: ['UI', 'Design'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    taskId: '2',
    title: 'Develop API Endpoints',
    description: 'Implement GET and POST endpoints for the tasks API.',
    status: Status.Pending,
    priority: Priority.High,
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    tags: ['Backend', 'API'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    taskId: '3',
    title: 'Setup CI/CD Pipeline',
    description: 'Configure GitHub Actions for continuous integration and deployment.',
    status: Status.Pending,
    priority: Priority.Medium,
    tags: ['DevOps'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    taskId: '4',
    title: 'Write User Documentation',
    description: 'Draft the initial user guide for the application.',
    status: Status.Completed,
    priority: Priority.Low,
    dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    tags: ['Documentation'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    taskId: '5',
    title: 'Test Cross-Browser Compatibility',
    description: 'Ensure the application works correctly on Chrome, Firefox, and Safari.',
    status: Status.InProgress,
    priority: Priority.Medium,
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    tags: ['QA', 'Testing'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
   {
    taskId: '6',
    title: 'Refactor Authentication Module',
    description: 'Improve the security and performance of the user authentication flow.',
    status: Status.Pending,
    priority: Priority.High,
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    tags: ['Backend', 'Security'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const STATUS_OPTIONS = [
  { value: Status.Pending, label: 'Pending' },
  { value: Status.InProgress, label: 'In Progress' },
  { value: Status.Completed, label: 'Completed' },
];

export const PRIORITY_OPTIONS = [
  { value: Priority.Low, label: 'Low' },
  { value: Priority.Medium, label: 'Medium' },
  { value: Priority.High, label: 'High' },
];
