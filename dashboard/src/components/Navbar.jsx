import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/logo.png';
import messageIcon from '../assets/message icon.png';
import notificationIcon from '../assets/notification icon.png';
import ChatNotification from '../components/Chat';
import Notification from '../components/Notification';
import Profile from '../components/Profile';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleSidebar = () => {
    console.log('Sidebar toggle clicked, current state:', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="w-full bg-white shadow-sm flex items-center justify-between px-4 py-3">
       
        <div>
          <button
            className="text-gray-700 text-2xl focus:outline-none hover:bg-gray-100 p-2 rounded"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 " 
          />
        </div>

        <div className="hidden md:flex flex-grow justify-center px-4">
          <input
            type="text"
            placeholder="Search anything here..."
            className="w-full max-w-md px-4 py-2 rounded-md bg-gray-100 border border-gray-200 outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={messageIcon}
              alt="Messages"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowChat(!showChat)}
            />
            <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              10
            </span>
          </div>

          <div className="relative">
            <img
              src={notificationIcon}
              alt="Notifications"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              10
            </span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              
            onClick={() => setShowProfile(!showProfile)}
            />
            <div className="hidden md:flex flex-col text-sm text-right">
              <span className="font-semibold text-gray-800">Mohd Saleem</span>
              <span className="text-gray-500 text-xs">Admin</span>
            </div>
          </div>
        </div>
      </nav>

  
      {showChat && (
        <div className="absolute top-16 right-4 z-50">
          <ChatNotification />
        </div>
      )}

    
      {showNotifications && (
        <div className="absolute top-16 right-4 z-50">
          <Notification />
        </div>
      )}

     
      {showProfile && (
        <div className="absolute top-14 left-auto right-4 z-50 bg-white shadow-md rounded-md p-4">
          <Profile />
        </div>
      )}
    </>
  );
};

export default Navbar;
       

