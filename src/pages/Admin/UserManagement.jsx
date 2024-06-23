
import React from 'react';
import UserList from './UserList';

function UserManagement() {
  return (
    <div className="p-8 bg-gradient-to-b from-[#e0f2fa] to-white min-h-screen ">
      <div className="mb-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">User Management</h2>
      </div>

      <UserList></UserList>
    </div>
  );
}

export default UserManagement