import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Crypto'); // Initial active tab

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex items-center justify-around mt-8">
      <div
        className={`text-xl text-gray-500 hover:text-gray-900 cursor-pointer font-semibold ${
          activeTab === 'Crypto' ? 'border-b-4 border-b-blue-600' : ''
        }`}
        onClick={() => handleClick('Crypto')}
      >
        Crypto
      </div>
      <div
        className={`text-xl text-gray-500 hover:text-gray-900 cursor-pointer font-semibold ${
          activeTab === 'NFTs' ? 'border-b-4 border-b-blue-700' : ''
        }`}
        onClick={() => handleClick('NFTs')}
      >
        NFTs
      </div>
    </div>
  );
};

export default Tabs;
