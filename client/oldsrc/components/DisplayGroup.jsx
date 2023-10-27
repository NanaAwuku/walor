// src/components/DisplayGroup.js

import React from "react";

function DisplayGroup({ group }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md m-4 w-64">
      {/* Group Image */}
      <img
        src="group-image-url.jpg" // Replace with the URL of the group's image
        alt="Group"
        className="w-full h-32 object-cover"
      />

      {/* Group Details */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{`Group ID: ${group.id}`}</h2>
        <p className="text-gray-700">{`Contribution Amount: ${group.contributionAmount} ETH`}</p>
        <p className="text-gray-700">{`Contribution Duration: ${group.contributionDuration} days`}</p>

        {/* Add more group details as needed */}
      </div>

      {/* Buttons for actions (e.g., join, contribute, etc.) */}
      <div className="p-4">
        <button className="bg-blue-500 text-white p-2 rounded m-2">Join Group</button>
        <button className="bg-green-500 text-white p-2 rounded m-2">Contribute</button>
        <button className="bg-red-500 text-white p-2 rounded m-2">Distribute Payout</button>
      </div>
    </div>
  );
}

export default DisplayGroup;
