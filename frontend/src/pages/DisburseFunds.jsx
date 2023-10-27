import React, { useState } from "react";
import { cashout } from "../assets"; // Import your image

function DisburseFunds() {
  const [memberName, setMemberName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [disbursementAmount, setDisbursementAmount] = useState(0);

  const handleDisburseFunds = () => {
    if (memberName && accountNumber && disbursementAmount > 0) {
      // Implement the logic to disburse funds to the specified member
      // You can use web3.js or your preferred method to interact with the blockchain
      // Example: Call a smart contract function to disburse funds
      // Remember to handle error cases and display success messages
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4">Disburse Funds</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              src={cashout} // Use your image URL
              alt="Group Image"
              className="w-full h-auto"
            />
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="memberName" className="block font-semibold">
                Member Name:
              </label>
              <input
                type="text"
                id="memberName"
                name="memberName"
                className="w-full p-2 border rounded"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="accountNumber" className="block font-semibold">
                Account Number:
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                className="w-full p-2 border rounded"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="disbursementAmount" className="block font-semibold">
                Disbursement Amount (ETH):
              </label>
              <input
                type="number"
                id="disbursementAmount"
                name="disbursementAmount"
                className="w-full p-2 border rounded"
                value={disbursementAmount}
                onChange={(e) => setDisbursementAmount(e.target.value)}
              />
            </div>
            <button
              onClick={handleDisburseFunds}
              className="bg-[#1dc071] text-white p-2 rounded hover:bg-blue-700"
            >
              Disburse Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisburseFunds;
