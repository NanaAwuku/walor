import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JoinGroup() {
  const navigate = useNavigate();
  const [groupData, setGroupData] = useState({
    groupId: "",
    memberName: "",
    contribution: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to join the group here
    console.log("Joining group with data:", groupData);

    // Navigate back to the home page or a success page
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">Join a Group</h1>
          <form onSubmit={handleFormSubmit}>
            {/* Group ID */}
            <div className="mb-4">
              <label htmlFor="groupId" className="block font-semibold">Group ID</label>
              <input
                type="text"
                id="groupId"
                name="groupId"
                className="w-full p-2 border rounded"
                value={groupData.groupId}
                onChange={(e) => setGroupData({ ...groupData, groupId: e.target.value })}
              />
            </div>

            {/* Member Name */}
            <div className="mb-4">
              <label htmlFor="memberName" className="block font-semibold">Member Name</label>
              <input
                type="text"
                id="memberName"
                name="memberName"
                className="w-full p-2 border rounded"
                value={groupData.memberName}
                onChange={(e) => setGroupData({ ...groupData, memberName: e.target.value })}
              />
            </div>

            <button type="submit" className="bg-[#1dc071] text-white p-2 rounded hover-bg-blue-700">Join Group</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JoinGroup;
