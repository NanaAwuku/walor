import React, { useState } from "react";
import { farm2, farm1, farm3, farm4, women1, women2, women3, men1, men2 } from "../assets";

function GroupInfo({ group }) {
  const [viewMembers, setViewMembers] = useState(false); // Initially hide members

  const totalContribution = group.members.reduce((total, member) => total + member.contribution, 0);

  return (
    <div className="group-card">
      <img src={group.image} alt="" />
      <h2 className="group-name">{group.groupName}</h2>
      <a
        className="view-toggle-button"
        onClick={() => setViewMembers(!viewMembers)}
      >
        {viewMembers ? "Hide Members" : "View Members"}
      </a>
      <table className={`members-table ${viewMembers ? "active" : ""}`}>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Contribution (ETH)</th>
          </tr>
        </thead>
        <tbody>
          {group.members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.contribution} ETH</td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewMembers ? (
        <p className="total-contribution">Total Contribution: {totalContribution} ETH</p>
      ) : null}
    </div>
  );
}

function AllGroupsInfo() {
  const [groups, setGroups] = useState([
    {
      groupName: "Harvest Helpers Fund",
      image: farm1,
      members: [
        { id: 1, name: "Dadson Jerry", contribution: 10 },
        { id: 2, name: "Joshua Quae", contribution: 15 },
        { id: 3, name: "Nana Addo", contribution: 12 },
      ],
    },
    {
      groupName: "AgriGrowth Savings Alliance",
      image: farm2,
      members: [
        { id: 4, name: "John Mahama", contribution: 8 },
        { id: 5, name: "Rawling Kakui", contribution: 20 },
      ],
    },
    {
      groupName: "Rural Crop Saver Society",
      image: men1,
      members: [
        { id: 4, name: "John Dramaki", contribution: 8 },
        { id: 5, name: "Owusu Pembah Kakui", contribution: 20 },
        { id: 5, name: "Gilbert Pembah Kakui", contribution: 20 },
      ],
    },
    {
      groupName: "Rural Crop Saver Society",
      image: women3,
      members: [
        { id: 4, name: "John Dramaki", contribution: 8 },
        { id: 5, name: "Owusu Pembah Kakui", contribution: 20 },
        { id: 5, name: "Gilbert Pembah Kakui", contribution: 20 },
      ],
    },
    {
      groupName: "Farming Future Fund",
      image: women1,
      members: [
        { id: 4, name: "John Dramaki", contribution: 8 },
        { id: 5, name: "Owusu Pembah Kakui", contribution: 20 },
        { id: 5, name: "Gilbert Pembah Kakui", contribution: 20 },
      ],
    },
    {
      groupName: "Agricollective Savings Circle",
      image: men2,
      members: [
        { id: 4, name: "John Dramaki", contribution: 8 },
        { id: 5, name: "Owusu Pembah Kakui", contribution: 20 },
        { id: 5, name: "Gilbert Pembah Kakui", contribution: 20 },
      ],
    },
    {
      groupName: "Harvest Helpers Fund",
      image: farm1,
      members: [
        { id: 1, name: "Dadson Jerry", contribution: 10 },
        { id: 2, name: "Joshua Quae", contribution: 15 },
        { id: 3, name: "Nana Addo", contribution: 12 },
      ],
    },
    {
      groupName: "AgriGrowth Savings Alliance",
      image: farm2,
      members: [
        { id: 4, name: "John Mahama", contribution: 8 },
        { id: 5, name: "Rawling Kakui", contribution: 20 },
      ],
    },
    {
      groupName: "Rural Crop Saver Society",
      image: men1,
      members: [
        { id: 4, name: "John Dramaki", contribution: 8 },
        { id: 5, name: "Owusu Pembah Kakui", contribution: 20 },
        { id: 5, name: "Gilbert Pembah Kakui", contribution: 20 },
      ],
    },
    {
      groupName: "Rural Crop Saver Society",
      image: women3,
      members: [
        { id: 4, name: "John Dramaki", contribution: 8 },
        { id: 5, name: "Owusu Pembah Kakui", contribution: 20 },
        { id: 5, name: "Gilbert Pembah Kakui", contribution: 20 },
      ],
    },
    // Add more groups as needed
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Groups Information</h1>
      <div className="group-container">
        {groups.map((group, index) => (
          <GroupInfo key={index} group={group} />
        ))}
      </div>
    </div>
  );
}

export default AllGroupsInfo;
