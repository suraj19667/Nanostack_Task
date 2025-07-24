import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    type: "task_completed",
    title: "Task completed",
    description: "[task_name] marked as completed..",
    time: "10 mins ago",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    type: "meeting_created",
    title: "Meeting Created",
    description: "New meeting [meeting_title] is created for [date_time]",
    time: "5 mins ago",
    icon: <FaRegCalendarAlt className="text-gray-600 w-10 h-10 p-2 bg-gray-300 rounded-full" />,
  },
  {
    id: 3,
    type: "action_added",
    title: "Action Item Added",
    description: "[action_item_name] is added in meeting [meeting_title]",
    time: "22 May 2025",
    icon: <FaRegCalendarAlt className="text-gray-600 w-10 h-10 p-2 bg-gray-300 rounded-full" />,
  },
  {
    id: 4,
    type: "task_assigned",
    title: "Task assigned",
    description: "[task_name] has been assigned to [user_name].",
    time: "2 hours ago",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const NotificationPanel = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white border rounded-lg shadow-sm">
     
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-bold text-lg">Notifications</h2>
        <span className="text-sm px-3 py-1 bg-green-200 text-green-800 font-medium rounded-full">
          5 new
        </span>
      </div>

      <div className="divide-y">
        {notifications.map((item) => (
          <div key={item.id} className="flex items-start p-4">
            {item.image ? (
              <img
                src={item.image}
                alt="profile"
                className="w-10 h-10 rounded-full mr-3 mt-1"
              />
            ) : (
              <div className="mr-3 mt-1">{item.icon}</div>
            )}
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-xs text-gray-400 mt-1">{item.time}</p>
            </div>
            <button className="ml-2 text-gray-400 hover:text-red-500">
              <AiOutlineClose size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <button className="w-full bg-purple-600 text-white font-medium py-2 rounded-md hover:bg-purple-700 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default NotificationPanel;
