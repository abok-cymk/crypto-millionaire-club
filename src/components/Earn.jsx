import React, { useState } from 'react';
import { FaEarlybirds } from "react-icons/fa";

const Earn = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-center cursor-pointer" onClick={openModal}>
        <button className="bg-gray-400 rounded-full bg-opacity-20 p-6">
          <FaEarlybirds />
        </button>
        <p className="font-bold text-sm">Earn</p>
      </div>
      {showModal && (
        <div  className={`fixed inset-0 z-50 overflow-auto w-[300px] h-[250px] p-6 mt-8 bg-gray-100 bg-opacity-50 transition-all ease-in-out duration-300 ${
            showModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
          <h2 className='text-gray-700 font-bold text-2xl'>How to Earn</h2>
          <p>Here are some ways to earn on our platform:</p>
          <ul className='mx-6 list-disc text-sm'>
            <li>Complete tasks or challenges.</li>
            <li>Refer friends and earn rewards.</li>
            <li>Participate in contests and giveaways.</li>
          </ul>
          <button onClick={closeModal}
          className='text-red-500'>Close</button>
        </div>
      )}
    </>
  );
};

export default Earn;

