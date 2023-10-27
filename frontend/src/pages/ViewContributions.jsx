// src/components/ViewContributions.js

import React, { useState } from "react";

function ViewContributions() {
  const [groups] = useState([
    {
      id: 1,
      name: "Group 1",
      image: "group-image-3.jpg",
      contributions: [
        { memberId: 1, amount: 10 },
        { memberId: 2, amount: 15 },
        // Add more contributions for Group 1
      ],
    },
    {
      id: 2,
      name: "Group 2",
      image: "group-image-3.jpg",
      contributions: [
        { memberId: 3, amount: 20 },
        { memberId: 4, amount: 12 },
        // Add more contributions for Group 2
      ],
    },
    {
      id: 3,
      name: "Group 3",
      image: "group-image-3.jpg",
      contributions: [
        { memberId: 5, amount: 18 },
        { memberId: 6, amount: 22 },
      ],
    },
    {
      id: 4,
      name: "Group 4",
      image: "group-image-3.jpg",
      contributions: [
        { memberId: 5, amount: 18 },
        { memberId: 6, amount: 22 },
      ],
    },
    // Add more groups as needed
  ]);

  const handleDisburse = (groupId, memberId) => {
    // Implement disbursement logic for the specified member within the group
    // You can use the group and member IDs to identify the recipient and amount to disburse
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">View Contributions</h1>

      {groups.map((group) => (
        <div key={group.id} className="mb-4 p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">{group.name}</h2>
          <img
            src={group.image} // Use the group's image URL
            alt={`Group ${group.id}`}
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <ul className="space-y-4">
            {group.contributions.map((contribution) => (
              <li key={contribution.memberId} className="flex items-center">
                <div className="w-1/2">Member {contribution.memberId}</div>
                <div className="w-1/4">
                  Contributed {contribution.amount} ETH
                </div>
                <div className="w-1/4 text-right">
                  <button
                    onClick={() =>
                      handleDisburse(group.id, contribution.memberId)
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                  >
                    Disburse
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ViewContributions;
