import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const Send = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1000); // Assuming initial wallet balance is 0

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="flex flex-col items-center cursor-pointer">
      {/* Button with clickable functionality */}
      <button
        className="bg-gray-400 rounded-full bg-opacity-20 p-6"
        onClick={handleButtonClick}
      >
        <FaArrowUp />
      </button>
      <p className="font-bold text-sm">Send</p>

      {/* Modal form with Tailwind CSS classes */}
      {isFormOpen && (
        <div
          className={`fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 transition-all ease-in-out duration-300 ${
            isFormOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold mb-4">Send Money</h2>
              <div className="mb-4">
                <label htmlFor="walletBalance" className="block text-sm font-medium mb-2">
                  Wallet Balance:
                </label>
                <input
                  type="text"
                  id="walletBalance"
                  value={walletBalance}
                  disabled
                  className="shadow-sm rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 cursor-not-allowed"
                />
              </div>
              {/* Other form fields (e.g., amount, recipient, etc.) */}
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-5">
                Submit
              </button>
              <button
                type="button"
                className="mt-4 text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={handleButtonClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Send;
