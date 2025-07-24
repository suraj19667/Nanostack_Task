import React from "react";

const StatusDropdown = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="font-medium text-black">Statuses in dropdown</span>
      <div className="flex flex-col gap-2">
        <span className="px-3 py-1 text-white text-sm font-semibold rounded bg-yellow-700">
          Pending
        </span>
        <span className="px-3 py-1 text-white text-sm font-semibold rounded bg-orange-500">
          In Progress
        </span>
        <span className="px-3 py-1 text-white text-sm font-semibold rounded bg-green-500">
          Completed
        </span>
        <span className="px-3 py-1 text-white text-sm font-semibold rounded bg-red-600">
          Overdue
        </span>
      </div>
    </div>
  );
};

export default StatusDropdown;
