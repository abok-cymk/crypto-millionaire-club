import React, { useState } from "react";
import { FaMoneyCheck, FaCreditCard } from "react-icons/fa6";
import { FaRegCreditCard, FaPaypal } from "react-icons/fa";

const Buy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentOptions, setPaymentOptions] = useState([
    { id: 1, name: "Credit Card", icon: <FaCreditCard /> },
    { id: 2, name: "Debit Card", icon: <FaRegCreditCard /> },
    { id: 3, name: "PayPal", icon: <FaPaypal /> },
  ]);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePaymentOptionClick = (option) => {
    setSelectedPaymentOption(option);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "expiryDate":
        setExpiryDate(value);
        break;
      case "cvc":
        setCvc(value);
        break;
      default:
        break;
    }
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    // Simulate payment processing (replace with actual logic)
    alert(`Processing payment with ${selectedPaymentOption.name}...`);
    setIsModalOpen(false);
    setSelectedPaymentOption(null);
    setCardNumber("");
    setExpiryDate("");
    setCvc("");
  };

  return (
    <div className="flex flex-col items-center cursor-pointer">
      {/* Button with clickable functionality */}
      <button
        className="bg-gray-400 rounded-full bg-opacity-20 p-6"
        onClick={handleButtonClick}
      >
        <FaMoneyCheck />
      </button>
      <p className="font-bold text-sm">Buy</p>

      {/* Modal form with Tailwind CSS classes */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 transition-all ease-in-out duration-300 ${
            isModalOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`flex items-center justify-center p-4 rounded-md hover:bg-gray-200 ${
                      selectedPaymentOption?.id === option.id
                        ? "bg-gray-100"
                        : ""
                    }`}
                    onClick={() => handlePaymentOptionClick(option)}
                  >
                    {option.icon}
                    <span className="ml-2 text-sm">{option.name}</span>
                  </button>
                ))}
              </div>

              {selectedPaymentOption && (
                <form onSubmit={handleCheckout}>
                  <div className="mt-6">
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium mb-2"
                    >
                      Card Number:
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={cardNumber}
                      onChange={handleInputChange}
                      className="shadow-sm rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <button onClick={handleButtonClick}
                    className="text-red-500 mt-8">
                        close
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buy;
