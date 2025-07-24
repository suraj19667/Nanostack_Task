import React from "react";
import { FiPlus, FiUpload, FiSearch, FiChevronDown } from "react-icons/fi";

const RightBottomNav = () => {
  return (
    <div className="p-6 bg-[#F8FAFC] rounded-md space-y-4">
     
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-semibold text-black">Buyer Meeting List View</h2>
          <p className="text-sm text-gray-500 mt-1">
            <span className="text-purple-600 font-medium">Buyer Meeting</span> &nbsp;&gt;&nbsp; Buyer Meeting List View
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-md text-sm">
            <FiUpload />
            Export
          </button>
          <button className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm">
            <FiPlus />
            Create New Meeting
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-md">
          All
          <span className="text-white bg-purple-600 px-2 py-0.5 rounded-full text-xs">100</span>
        </button>
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700">
          Draft
          <span className="text-white bg-gray-500 px-2 py-0.5 rounded-full text-xs">50</span>
        </button>
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700">
          Archive
          <span className="text-white bg-gray-500 px-2 py-0.5 rounded-full text-xs">75</span>
        </button>
      </div>

      
      <div className="bg-white border border-gray-200 p-4 rounded-md shadow-sm">
        <div className="flex flex-wrap gap-3">
         
          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search anything here..."
              className="pl-9 pr-3 py-2 w-full border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-purple-300 outline-none"
            />
          </div>
          {[
            "Buyer Name",
            "Brand",
            "Dept",
            "Meeting Type",
            "Participants",
            "Meeting Date",
            "Status",
          ].map((label, i) => (
            <button
              key={i}
              className="flex items-center gap-2 border border-gray-300 bg-white px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50"
            >
              {label}
              <FiChevronDown className="text-gray-500 text-xs" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBottomNav;
