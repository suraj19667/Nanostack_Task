import React, { useState } from 'react';
import ActivityLog from "../components/ActivityLog"; 

const mockData = [
	{
		dateTime: '01 May, 2025 at 2pm',
		status: 'Completed',
		type: 'Online',
		buyer: 'Mango Private Limited',
		brand: 'Mango',
		dept: 'Design',
		title: 'Costing Discussion with Zara',
		meetingDate: '01 May, 2025 at 2pm',
		participants: 'Mohd Saleem +2',
		statusColor: 'green',
	},
	{
		dateTime: '02 May, 2025 at 3pm',
		status: 'Upcoming',
		type: 'Offline',
		buyer: 'Cherry Innovations',
		brand: 'Cherry',
		dept: 'Development',
		title: 'UI/UX Review',
		meetingDate: '02 May, 2025 at 3pm',
		participants: 'Mohd Saleem +2',
		statusColor: 'yellow',
	},
	{
		dateTime: '03 May, 2025 at 10am',
		status: 'Follow-up (4)',
		type: 'Offline',
		buyer: 'Pineapple Inc.',
		brand: 'Pineapple',
		dept: 'Marketing',
		title: 'Campaign Strategy',
		meetingDate: '03 May, 2025 at 10am',
		participants: 'Mohd Saleem +2',
		statusColor: 'blue',
	},
	{
		dateTime: '04 May, 2025 at 1pm',
		status: 'Re-scheduled',
		type: 'Offline',
		buyer: 'Peach Corp.',
		brand: 'Peach',
		dept: 'Finance',
		title: 'Budget Review',
		meetingDate: '04 May, 2025 at 1pm',
		participants: 'Mohd Saleem +2',
		statusColor: 'indigo',
	},
	{
		dateTime: '05 May, 2025 at 4pm',
		status: 'Overdue',
		type: 'Online',
		buyer: 'Banana Solutions',
		brand: 'Banana',
		dept: 'Product',
		title: 'Feature Prioritization',
		meetingDate: '05 May, 2025 at 4pm',
		participants: 'Mohd Saleem +2',
		statusColor: 'red',
	},
	{
		dateTime: '06 May, 2025 at 11am',
		status: 'In Progress (3/4)',
		type: 'Online',
		buyer: 'Coconut Group',
		brand: 'Coconut',
		dept: 'Support',
		title: 'Customer Feedback',
		meetingDate: '06 May, 2025 at 11am',
		participants: 'Mohd Saleem +2',
		statusColor: 'orange',
	},
	{
		dateTime: '07 May, 2025 at 2pm',
		status: 'Ongoing',
		type: 'Online',
		buyer: 'Lemon Technologies',
		brand: 'Lemon',
		dept: 'Sales',
		title: 'Sales Strategy',
		meetingDate: '07 May, 2025 at 2pm',
		participants: 'Mohd Saleem +2',
		statusColor: 'black',
	},
	{
		dateTime: '08 May, 2025 at 9am',
		status: 'Completed',
		type: 'Offline',
		buyer: 'Grapefruit LLC',
		brand: 'Grapefruit',
		dept: 'Research',
		title: 'Market Analysis',
		meetingDate: '08 May, 2025 at 9am',
		participants: 'Mohd Saleem +2',
		statusColor: 'green',
	},
	{
		dateTime: '09 May, 2025 at 3pm',
		status: 'Draft',
		type: 'Offline',
		buyer: 'Kiwi Systems',
		brand: 'Kiwi',
		dept: 'HR',
		title: 'Employee Engagement',
		meetingDate: '09 May, 2025 at 3pm',
		participants: 'Mohd Saleem +2',
		statusColor: 'gray',
	},
	{
		dateTime: '10 May, 2025 at 5pm',
		status: 'Archived',
		type: 'Offline',
		buyer: 'Orange Enterprises',
		brand: 'Orange',
		dept: 'Legal',
		title: 'Contract Review',
		meetingDate: '10 May, 2025 at 5pm',
		participants: 'Mohd Saleem +2',
		statusColor: 'rose',
	},
];

const badgeColor = {
	green: 'bg-green-100 text-green-700',
	yellow: 'bg-yellow-100 text-yellow-700',
	blue: 'bg-blue-100 text-blue-700',
	indigo: 'bg-indigo-100 text-indigo-700',
	red: 'bg-red-100 text-red-700',
	orange: 'bg-orange-100 text-orange-700',
	black: 'bg-black text-white',
	gray: 'bg-gray-100 text-gray-700',
	rose: 'bg-rose-100 text-rose-700',
};

const Product = () => {
	const [dropdownVisible, setDropdownVisible] = useState(null);
	const [activityLogVisible, setActivityLogVisible] = useState(false);

	const toggleDropdown = (index) => {
		setDropdownVisible(dropdownVisible === index ? null : index);
	};

	const handleActivityLogClick = () => {
		setActivityLogVisible(true);
	};

	return (
		<div className="p-4 bg-white rounded-lg shadow border border-gray-200 overflow-auto max-h-[600px]">
			<div className="overflow-x-auto">
				<table className="w-[1500px] text-sm text-left text-gray-700">
					<thead className="sticky top-0 bg-gray-100 text-xs font-semibold text-gray-600 uppercase z-10">
						<tr>
							<th className="px-4 py-3">Date & Time</th>
							<th className="px-4 py-3">Status</th>
							<th className="px-4 py-3">Type</th>
							<th className="px-4 py-3">Buyer Name</th>
							<th className="px-4 py-3">Brand</th>
							<th className="px-4 py-3">Dept.</th>
							<th className="px-4 py-3">Title</th>
							<th className="px-4 py-3">Meeting Date</th>
							<th className="px-4 py-3">Action</th>
						</tr>
					</thead>
					<tbody>
						{mockData.map((row, index) => (
							<tr key={index} className="border-t hover:bg-gray-50">
								<td className="px-4 py-2">{row.dateTime}</td>
								<td className="px-4 py-2">
									<span
										className={`px-2 py-1 rounded-full text-xs font-medium ${badgeColor[row.statusColor]}`}
									>
										{row.status}
									</span>
								</td>
								<td className="px-4 py-2">
									<span className="px-2 py-1 bg-gray-200 rounded-full text-xs">
										{row.type}
									</span>
								</td>
								<td className="px-4 py-2">{row.buyer}</td>
								<td className="px-4 py-2">{row.brand}</td>
								<td className="px-4 py-2">{row.dept}</td>
								<td className="px-4 py-2 text-blue-600 underline cursor-pointer">
									{row.title}
								</td>
								<td className="px-4 py-2">{row.meetingDate}</td>
								<td className="px-4 py-2 relative">
									<span
										className="text-gray-400 text-xl cursor-pointer"
										onClick={() => toggleDropdown(index)}
									>
										⋮
									</span>
									{dropdownVisible === index && (
										<div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
											<ul className="text-sm text-gray-700">
												<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
													View
												</li>
												<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
													Edit
												</li>
												<li
													className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
													onClick={handleActivityLogClick}
												>
													Activity Log
												</li>
												<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
													Delete
												</li>
											</ul>
										</div>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="flex items-center justify-between mt-4 text-sm text-gray-600">
				<div>
					<label htmlFor="itemsPerPage" className="mr-2">
						Items Per Page
					</label>
					<select id="itemsPerPage" className="border rounded px-2 py-1 text-sm">
						<option>50</option>
						<option>100</option>
					</select>
				</div>
				<div className="flex items-center">
					<span>1–50 of 100</span>
					<button className="ml-4 px-2">&lt;</button>
					<button className="px-2 font-semibold text-white bg-purple-600 rounded">
						1
					</button>
					{[2, 3, 4, 5].map((p) => (
						<button key={p} className="px-2">
							{p}
						</button>
					))}
					<span className="px-2">...</span>
					<button className="px-2">12</button>
					<button className="px-2">&gt;</button>
				</div>
			</div>

			{activityLogVisible && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white p-4 rounded shadow-lg">
						<ActivityLog />
						<button
							className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
							onClick={() => setActivityLogVisible(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;


