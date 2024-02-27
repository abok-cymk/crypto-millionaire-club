import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa6';

const NotificationBell = () => {
  const [isNotified, setIsNotified] = useState(false);

  const toggleNotification = () => {
    setIsNotified(!isNotified);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-400 bg-opacity-10 p-2 rounded-lg hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={toggleNotification}
      >
        <FaBell className="text-2xl text-gray-500 cursor-pointer" />
        {/* Notification indicator */}
        {isNotified && (
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 rounded-full text-white w-5 h-5 flex items-center justify-center">
            1
          </span>
        )}
      </button>
      {isNotified && (
        <div className="absolute -right-2 top-full mt-2 w-48 shadow-md rounded-lg bg-white overflow-hidden z-10">
          <div className="p-2">
            <p className="text-sm font-medium">You have a new notification!</p>
            <p className="text-xs text-gray-500">Click to view details.</p>
          </div>
          <button
            className="w-full p-2 text-right text-sm font-medium text-blue-500 hover:bg-blue-100"
            onClick={() => {
              setIsNotified(false); // Close notification on click
            }}
          >
            View details
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
