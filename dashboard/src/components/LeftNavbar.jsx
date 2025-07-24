import React from 'react';
import {
  FiHome,
  FiCheckSquare,
  FiCalendar,
  FiClock,
  FiFileText,
  FiBookOpen,
  FiPackage,
  FiShoppingBag,
  FiArchive,
  FiCodesandbox,
  FiUsers,
  FiUser,
  FiTruck,
  FiBarChart2,
  FiFile,
  FiSettings,
  FiChevronRight
} from 'react-icons/fi';

const menuItems = [
  { label: 'Dashboard', icon: <FiHome /> },
  { label: 'Tasks', icon: <FiCheckSquare /> },
  { label: 'Buyer Meeting', icon: <FiCalendar />, active: true },
  { label: 'Quick Costing', icon: <FiClock /> },
  { label: 'Pre Order Costing', icon: <FiFileText /> },
  { label: 'Style Library', icon: <FiBookOpen /> },
  { label: 'Requisitions', icon: <FiPackage />, hasChildren: true },
  { label: 'Buyer Purchase', icon: <FiShoppingBag />, hasChildren: true },
  { label: 'Inventory', icon: <FiArchive />, hasChildren: true },
  { label: 'Sample Development', icon: <FiCodesandbox />, hasChildren: true },
  { label: 'Production', icon: <FiClock />, hasChildren: true },
  { label: 'Master Admin', icon: <FiUsers />, hasChildren: true },
  { label: 'Users', icon: <FiUser />, hasChildren: true },
  { label: 'Suppliers', icon: <FiUsers /> },
  { label: 'Showroom', icon: <FiPackage />, hasChildren: true },
  { label: 'Shipment', icon: <FiTruck />, hasChildren: true },
  { label: "KPI's", icon: <FiBarChart2 />, hasChildren: true },
  { label: 'E-Invoice / E-Way Bill', icon: <FiFile />, hasChildren: true },
  { label: 'Reports', icon: <FiFileText /> },
  { label: 'Master Data', icon: <FiBookOpen />, hasChildren: true },
  { label: 'Settings', icon: <FiSettings /> }
];

const LeftNavbar = () => {
	return (
		<div className="w-full h-full bg-white p-4 overflow-y-auto">
			<ul className="space-y-1">
				{menuItems.map((item, index) => (
					<li
						key={index}
						className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer
							${
								item.active
									? 'bg-purple-100 text-purple-600 font-medium'
									: 'hover:bg-gray-100 text-gray-700'
							}
						`}
					>
						<div className="flex items-center gap-3">
							<span className="text-lg">{item.icon}</span>
							<span className="text-sm">{item.label}</span>
						</div>
						{item.hasChildren && <FiChevronRight className="text-gray-400 text-sm" />}
					</li>
				))}
			</ul>
		</div>
	);
};

export default LeftNavbar;
											