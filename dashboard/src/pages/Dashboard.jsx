import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/LeftNavbar';
import RightBottomNav from '../components/RightBottomNav';
import Product from '../components/Product';

const Dashboard = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="flex flex-col h-screen bg-gray-50">
			<Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
			<div className="flex flex-grow overflow-hidden">
				{isSidebarOpen && (
					<div className="w-80">
						<LeftNavbar />
					</div>
				)}
				<div className="flex-grow p-4 overflow-auto">
					<RightBottomNav />
					<Product />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;