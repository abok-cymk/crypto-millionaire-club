import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa6';

const Receive = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
    // Simulate sending verification code (replace with actual logic)
    setVerificationCode(Math.floor(Math.random() * 1000000).toString().padStart(6, '0'));
  };

  const handleVerification = (e) => {
    e.preventDefault();
    if (verificationCode === '123456') { // Replace with actual verification logic
      setIsSuccess(true);
    } else {
      alert('Invalid verification code');
    }
  };

  return (
    <div className="flex flex-col items-center cursor-pointer">
      {/* Button with clickable functionality */}
      <button className="bg-gray-400 rounded-full bg-opacity-20 p-6" onClick={handleButtonClick}>
        <FaArrowDown />
      </button>
      <p className="font-bold text-sm">Receive</p>

      {/* Modal form with Tailwind CSS classes */}
      {isFormOpen && !isSuccess && (
        <div
          className={`fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 transition-all ease-in-out duration-300 ${
            isFormOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold mb-4">Enter Verification Code</h2>
              <form onSubmit={handleVerification}>
                <div className="mb-4">
                  <label htmlFor="verificationCode" className="block text-sm font-medium mb-2">
                    Verification Code:
                  </label>
                  <input
                    type="text"
                    id="verificationCode"
                    readOnly
                    value={verificationCode}
                    className="shadow-sm rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <p className="text-xs text-gray-500">A 6-digit code has been sent to the receiver for confirmation.</p>
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-8">
                  Accept
                </button>
                <button onClick={handleButtonClick}
                className='text-red-300'>
                    close
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {isSuccess && (
        <div className="text-center text-xl text-green-500">Transaction Successful!</div>
      )}
    </div>
  );
};

export default Receive;
