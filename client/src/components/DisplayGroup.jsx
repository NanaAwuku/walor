import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function DisplayGroup({ group }) {
  const navigate = useNavigate(); // Initialize navigate

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
        <button
          onClick={() => navigate("/join-group")} // Use navigate to go to the "Join Group" page
          className="bg-blue-500 text-white p-2 rounded m-2"
        >
          Join Group
        </button>
      </div>
    </div>
  );
}

export default DisplayGroup;
