// src/components/SavingsGroupApp.js

import React from "react";
import DisplayGroup from "../components/DisplayGroup";

function Home() {
  const groups = [
    { id: 1, contributionAmount: 5, contributionDuration: 30 },
    { id: 2, contributionAmount: 10, contributionDuration: 30 },
    { id: 3, contributionAmount: 7, contributionDuration: 30 },
    { id: 4, contributionAmount: 8, contributionDuration: 30 },
    { id: 5, contributionAmount: 6, contributionDuration: 30 },
    { id: 6, contributionAmount: 9, contributionDuration: 30 },
    { id: 7, contributionAmount: 7, contributionDuration: 30 },
    // Add more group data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Savings Group</h1>
      <div className="flex flex-wrap">
        {groups.map((group) => (
          <DisplayGroup key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}

export default Home;
