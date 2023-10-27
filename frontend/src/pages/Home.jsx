// src/components/SavingsGroupApp.js

import React from "react";
import { farm2, farm1, farm3, farm4, women1, women2, women3, men1, men2 } from "../assets";
import DisplayGroup from "../components/DisplayGroup";

function Home() {
  const groups = [
    {
      id: "Harvest Helpers Fund",
      contributionAmount: 50,
      contributionDuration: 30,
      image: farm1,
    },
    {
      id: "AgriGrowth Savings Alliance",
      contributionAmount: 10,
      contributionDuration: 30,
      image: farm2,
    },
    {
      id: "Rural Crop Saver Society",
      contributionAmount: 100,
      contributionDuration: 30,
      image: men1,
    },
    {
      id: "Farming Future Fund",
      contributionAmount: 8,
      contributionDuration: 30,
      image: women1,
    },
    {
      id: "Agricollective Savings Circle",
      contributionAmount: 6,
      contributionDuration: 30,
      image: men2,
    },
    {
      id: "Crop Prosperity Pact",
      contributionAmount: 9,
      contributionDuration: 30,
      image: women3,
    },
    {
      id: "Farming Fortune Club",
      contributionAmount: 7,
      contributionDuration: 30,
      image: women2,
    },
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
