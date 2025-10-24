
import React, { useState, useMemo } from 'react';
import { Task, Status, Priority } from '../types';
import { INITIAL_TASKS, STATUS_OPTIONS } from '../constants';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';
import { PlusIcon } from './IconComponents';

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [filterPriority, setFilterPriority] = useState<Priority | 'all'>('all');
  const [sortBy, setSortBy] = useState<'dueDate' | 'priority'>('priority');

  const openModalForNew = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleSaveTask = (taskToSave: Omit<Task, 'taskId' | 'createdAt' | 'updatedAt'> & { taskId?: string }) => {
    if (taskToSave.taskId) {
      // Update existing task
      setTasks(tasks.map(t =>
        t.taskId === taskToSave.taskId
          ? { ...t, ...taskToSave, updatedAt: new Date().toISOString() }
          : t
      ));
    } else {
      // Add new task
      const newTask: Task = {
        ...taskToSave,
        taskId: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setTasks([...tasks, newTask]);
    }
    closeModal();
  };

  const handleDeleteTask = (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
        setTasks(tasks.filter(t => t.taskId !== taskId));
    }
  };

  const filteredAndSortedTasks = useMemo(() => {
    let result = tasks;

    if (filterPriority !== 'all') {
      result = result.filter(task => task.priority === filterPriority);
    }

    result.sort((a, b) => {
      if (sortBy === 'priority') {
        const priorityOrder = { [Priority.High]: 0, [Priority.Medium]: 1, [Priority.Low]: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      if (sortBy === 'dueDate') {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
      return 0;
    });

    return result;
  }, [tasks, filterPriority, sortBy]);

  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center gap-4 flex-wrap">
              <div>
                  <label htmlFor="filterPriority" className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Filter by Priority:</label>
                  <select
                      id="filterPriority"
                      value={filterPriority}
                      onChange={(e) => setFilterPriority(e.target.value as Priority | 'all')}
                      className="rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                  >
                      <option value="all">All</option>
                      <option value={Priority.High}>High</option>
                      <option value={Priority.Medium}>Medium</option>
                      <option value={Priority.Low}>Low</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="sortBy" className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Sort by:</label>
                  <select
                      id="sortBy"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as 'dueDate' | 'priority')}
                      className="rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                  >
                      <option value="priority">Priority</option>
                      <option value="dueDate">Due Date</option>
                  </select>
              </div>
          </div>
          <button
              onClick={openModalForNew}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add New Task
          </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATUS_OPTIONS.map(statusInfo => (
          <TaskColumn
            key={statusInfo.value}
            status={statusInfo.value}
            title={statusInfo.label}
            tasks={filteredAndSortedTasks.filter(t => t.status === statusInfo.value)}
            onEditTask={openModalForEdit}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </div>

      {isModalOpen && (
        <TaskModal
          task={editingTask}
          onSave={handleSaveTask}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default TaskBoard;
