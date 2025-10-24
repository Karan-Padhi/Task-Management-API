
import React from 'react';
import { TaskIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center gap-3">
        <TaskIcon className="h-8 w-8 text-indigo-500" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Task Management Board
        </h1>
      </div>
    </header>
  );
};

export default Header;
