import React from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const DropdownMenu = () => {
  return (
    <div className="w-48 border rounded-md overflow-hidden shadow-sm bg-white">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <FaUser className="text-gray-600" />
        <span className="text-sm font-medium text-gray-800">Profile</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer">
        <FaCog className="text-gray-600" />
        <span className="text-sm font-medium text-gray-800">Settings</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer">
        <FaSignOutAlt className="text-gray-600" />
        <span className="text-sm font-medium text-gray-800">Log Out</span>
      </div>
    </div>
  );
};

export default DropdownMenu;
