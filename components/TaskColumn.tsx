
import React from 'react';
import { Task, Status } from '../types';
import TaskCard from './TaskCard';

interface TaskColumnProps {
  status: Status;
  title: string;
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const statusStyles: Record<Status, { bg: string, text: string, border: string }> = {
  [Status.Pending]: { bg: 'bg-amber-100 dark:bg-amber-900/50', text: 'text-amber-800 dark:text-amber-200', border: 'border-amber-500' },
  [Status.InProgress]: { bg: 'bg-blue-100 dark:bg-blue-900/50', text: 'text-blue-800 dark:text-blue-200', border: 'border-blue-500' },
  [Status.Completed]: { bg: 'bg-green-100 dark:bg-green-900/50', text: 'text-green-800 dark:text-green-200', border: 'border-green-500' },
};

const TaskColumn: React.FC<TaskColumnProps> = ({ status, title, tasks, onEditTask, onDeleteTask }) => {
  const styles = statusStyles[status];
  
  return (
    <div className={`${styles.bg} rounded-xl p-4 shadow-sm`}>
      <h2 className={`text-lg font-semibold ${styles.text} mb-4 pb-2 border-b-2 ${styles.border} flex justify-between items-center`}>
        {title}
        <span className={`text-sm font-bold ${styles.text} bg-white dark:bg-gray-700/50 rounded-full px-2 py-0.5`}>{tasks.length}</span>
      </h2>
      <div className="space-y-4 h-full">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard
              key={task.taskId}
              task={task}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
            />
          ))
        ) : (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            <p>No tasks here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
