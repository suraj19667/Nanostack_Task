import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const messages = [
  {
    id: 1,
    username: "[user_name]",
    time: "10 mins ago",
    message: "You have a new messages from",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    username: "[user_name]",
    time: "10 mins ago",
    message: "You have a new messages from",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    username: "[user_name]",
    time: "10 mins ago",
    message: "You have a new messages from",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 4,
    username: "[user_name]",
    time: "10 mins ago",
    message: "You have a new messages from",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const ChatNotification = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white border rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-bold text-lg">Chat</h2>
        <span className="text-sm px-3 py-1 bg-green-200 text-green-800 font-medium rounded-full">
          5 new
        </span>
      </div>

      {/* Message List */}
      <div className="divide-y">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start p-4">
            <img
              src={msg.image}
              alt="user"
              className="w-10 h-10 rounded-full mr-3 mt-1"
            />
            <div className="flex-1">
              <p className="font-semibold">New Message</p>
              <p className="text-sm text-gray-600">
                {msg.message}{" "}
                <span className="text-blue-500 font-medium">{msg.username}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
            </div>
            <button className="ml-2 text-gray-400 hover:text-red-500">
              <AiOutlineClose size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <button className="w-full bg-purple-600 text-white font-medium py-2 rounded-md hover:bg-purple-700 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default ChatNotification;
