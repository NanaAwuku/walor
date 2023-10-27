import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { creategroup } from "../assets"; // Import your image

function CreateGroup() {
  const navigate = useNavigate();
  const [groupData, setGroupData] = useState({
    groupName: "",
    contributionAmount: "",
    groupLeader: "",
    purposeOfCollection: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (groupData.groupName && groupData.contributionAmount && groupData.groupLeader) {
      // Navigate to the home page if all fields are entered
      navigate("/");
    } else {
      // Handle validation error, e.g., show a message
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex flex-wrap">
          {/* Div for the form */}
          <div className="w-full md:w-1/2 p-4" style={{ height: "100%" }}>
            <h1 className="text-2xl font-bold mb-4">Create a New Group</h1>
            <form onSubmit={handleFormSubmit}>
              {/* Group Name */}
              <div className="mb-4">
                <label htmlFor="groupName" className="block font-semibold">Group Name</label>
                <input
                  type="text"
                  id="groupName"
                  name="groupName"
                  className="w-full p-2 border rounded"
                  value={groupData.groupName}
                  onChange={(e) => setGroupData({ ...groupData, groupName: e.target.value })}
                />
              </div>

              {/* Contribution Amount */}
              <div className="mb-4">
                <label htmlFor="contributionAmount" className="block font-semibold">Contribution Amount (ETH)</label>
                <input
                  type="number"
                  id="contributionAmount"
                  name="contributionAmount"
                  className="w-full p-2 border rounded"
                  value={groupData.contributionAmount}
                  onChange={(e) => setGroupData({ ...groupData, contributionAmount: e.target.value })}
                />
              </div>

              {/* Group Leader */}
              <div className="mb-4">
                <label htmlFor="groupLeader" className="block font-semibold">Group Leader</label>
                <input
                  type="text"
                  id="groupLeader"
                  name="groupLeader"
                  className="w-full p-2 border rounded"
                  value={groupData.groupLeader}
                  onChange={(e) => setGroupData({ ...groupData, groupLeader: e.target.value })}
                />
              </div>

              {/* Purpose of Collection
              <div className="mb-4">
                <label htmlFor="purposeOfCollection" className="block font-semibold">Purpose of Collection</label>
                <textarea
                  id="purposeOfCollection"
                  name="purposeOfCollection"
                  rows="4"
                  className="w-full p-2 border rounded"
                  value={groupData.purposeOfCollection}
                  onChange={(e) => setGroupData({ ...groupData, purposeOfCollection: e.target.value })}
                ></textarea>
              </div> */}

              <button type="submit" className="bg-[#1dc071] text-white p-2 rounded hover-bg-blue-700">Create Group</button>
            </form>
          </div>
          {/* Div for the image */}
          <div className="w-full md:w-1/2 p-4" style={{ height: "30%" }}>
            <img
              src={creategroup} // Use your image URL
              alt="Group Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
