// src/components/CreateGroup.js

import React, { useState } from "react";

function CreateGroup({ onCreateGroup }) {
  const [contributionAmount, setContributionAmount] = useState(0);
  const [contributionDuration, setContributionDuration] = useState(0);

  const handleCreateGroup = () => {
    // Create a new group with the provided details
    onCreateGroup(contributionAmount, contributionDuration);
    // Optionally, clear the input fields or perform other actions
    setContributionAmount(0);
    setContributionDuration(0);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md m-4 w-64 p-4">
      <h2 className="text-xl font-bold mb-2">Create a New Group</h2>
      <div className="mb-4">
        <label>Contribution Amount (ETH):</label>
        <input
          type="number"
          value={contributionAmount}
          onChange={(e) => setContributionAmount(e.target.value)}
          className="border p-1"
        />
      </div>
      <div className="mb-4">
        <label>Contribution Duration (days):</label>
        <input
          type="number"
          value={contributionDuration}
          onChange={(e) => setContributionDuration(e.target.value)}
          className="border p-1"
        />
      </div>
      <button onClick={handleCreateGroup} className="bg-blue-500 text-white p-2 rounded">
        Create Group
      </button>
    </div>
  );
}

export default CreateGroup;
