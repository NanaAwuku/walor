// src/components/JoinGroup.js

import React, { useState } from 'react';

function JoinGroup() {
  const [groupId, setGroupId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoinGroup = () => {
    // Implement logic to join a group using the provided `groupId`.
    // You can also handle error messages or success messages as needed.
    // This is just a basic example.
    if (groupId === '') {
      setErrorMessage('Please enter a valid Group ID.');
    } else {
      // Join the group logic
      setErrorMessage('');
      // Optionally, navigate to a success page or handle success message
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Join a Group</h1>
      <div className="mb-4">
        <label>Group ID:</label>
        <input
          type="text"
          value={groupId}
          onChange={(e) => setGroupId(e.target.value)}
          className="border p-2"
        />
      </div>
      <button onClick={handleJoinGroup} className="bg-blue-500 text-white p-2 rounded">
        Join Group
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
}

export default JoinGroup;
