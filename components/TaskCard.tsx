
import React from 'react';
import { Task, Priority } from '../types';
import { EditIcon, DeleteIcon, CalendarIcon, TagIcon } from './IconComponents';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

const priorityStyles: Record<Priority, { bg: string, text: string, border: string }> = {
  [Priority.High]: { bg: 'bg-red-100 dark:bg-red-900/50', text: 'text-red-800 dark:text-red-200', border: 'border-l-4 border-red-500' },
  [Priority.Medium]: { bg: 'bg-yellow-100 dark:bg-yellow-900/50', text: 'text-yellow-800 dark:text-yellow-200', border: 'border-l-4 border-yellow-500' },
  [Priority.Low]: { bg: 'bg-gray-100 dark:bg-gray-700/50', text: 'text-gray-800 dark:text-gray-300', border: 'border-l-4 border-gray-400' },
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  const styles = priorityStyles[task.priority];

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-3 transition-shadow hover:shadow-lg ${styles.border}`}>
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-800 dark:text-gray-100 pr-2">{task.title}</h3>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${styles.bg} ${styles.text}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>

      {task.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{task.description}</p>
      )}
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 dark:text-gray-400">
        {task.dueDate && (
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
        )}
        {task.tags && task.tags.length > 0 && (
           <div className="flex items-center gap-1">
             <TagIcon className="h-4 w-4"/>
             <div className="flex flex-wrap gap-1">
              {task.tags.map(tag => (
                <span key={tag} className="bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-0.5 text-xs">{tag}</span>
              ))}
            </div>
           </div>
        )}
      </div>

      <div className="flex justify-end items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => onEdit(task)}
          className="p-1.5 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Edit Task"
        >
          <EditIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(task.taskId)}
          className="p-1.5 text-gray-500 hover:text-red-600 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Delete Task"
        >
          <DeleteIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
