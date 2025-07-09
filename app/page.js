'use client';  
import React, { useState } from 'react';
 
const Dashboard = () => { 
 
  const menuItems = [
    {
      icon: "/vuesax-outline-home-2.svg",
      label: "Dashboard",
      active: true,
    },
    {
      icon: "/icons-2.svg",
      label: "Properties",
      active: false,
    },
    {
      icon: "/vuesax-linear-people.svg",
      label: "User Management",
      active: false,
    },
    {
      icon: "/vuesax-outline-category-2.svg",
      label: "Bookings",
      active: false,
    },
    {
      icon: "/vuesax-outline-candle-2.svg",
      label: "Dispute Centre",
      active: false,
    },
    {
      icon: "/vuesax-outline-setting-2.svg",
      label: "Settings",
      active: false,
    },
  ];

  // Footer menu items
  const footerItems = [
    {
      icon: "",
      label: "Privacy Policy",
      active: false,
    },
  ];

  // Data for metric cards
  const metricCards = [
    {
      title: "Active Users",
      value: "3632",
      period: "Overall last month",
      change: "30.5626%",
      isPositive: true,
    },
    {
      title: "Total Properties",
      value: "10k+",
      period: "Overall last month",
      change: "30.5626%",
      isPositive: true,
    },
    {
      title: "Total Revenue",
      value: "$900K",
      period: "Overall this month",
      change: "30.5626%",
      isPositive: false,
    },
  ];

  // Data for bookings table
  const bookings = [
    {
      name: "Olivia Daddario",
      status: "Completed",
      statusColor: "success",
      price: "$633.00",
      capacity: "60 (Seated)",
      duration: "24 May - 28 May 2024",
    },
    {
      name: "Jack Paul",
      status: "In Progress",
      statusColor: "warning",
      price: "$231.00",
      capacity: "60 (Seated)",
      duration: "24 May - 28 May 2024",
    },
    {
      name: "Mr Aalexandar",
      status: "Cancelled",
      statusColor: "error",
      price: "$260.00",
      capacity: "60 (Seated)",
      duration: "24 May - 28 May 2024",
    },
    {
      name: "Arnold Archer",
      status: "Completed",
      statusColor: "success",
      price: "$900.00",
      capacity: "60 (Seated)",
      duration: "24 May - 28 May 2024",
    },
  ];

  // Data for user registrations table
  const userRegistrations = [
    {
      name: "Olivia Daddario",
      category: "Guest",
      categoryColor: "blue",
      joinDate: "Jan 13, 2022",
      email: "Userefandax1234@gmail.com",
    },
    {
      name: "Jack Paul",
      category: "Host",
      categoryColor: "yellow",
      joinDate: "Jan 12, 2022",
      email: "Userefandax1234@gmail.com",
    },
    {
      name: "Mr Aalexandar",
      category: "Guest",
      categoryColor: "blue",
      joinDate: "Jan 12, 2022",
      email: "Userefandax1234@gmail.com",
    },
    {
      name: "Arnold Archer",
      category: "Host",
      categoryColor: "yellow",
      joinDate: "Jan 12, 2022",
      email: "Userefandax1234@gmail.com",
    },
    {
      name: "Jack Paul",
      category: "Guest",
      categoryColor: "blue",
      joinDate: "Jan 12, 2022",
      email: "Userefandax1234@gmail.com",
    },
  ];

  // Status Badge Component
  const StatusBadge = ({ status }) => {
    const getStatusStyle = () => {
      switch (status) {
        case "Completed":
          return "bg-green-100 text-green-800";
        case "In Progress":
          return "bg-yellow-100 text-yellow-800";
        case " • Cancelled":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle()}`}>
        {status === "Completed" && "✓ "}
        {status === "In Progress" && " • "}
        {status === "Cancelled" && " • "}
        {status}
      </span>
    );
  };

  // Category Badge Component
  const CategoryBadge = ({ category }) => {
    const isGuest = category === "Guest";
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isGuest ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"
      }`}>
        {isGuest ? "• " : "• "} {category}
      </span>
    );
  };

  // Navigation Menu Section
  const NavigationMenuSection = () => (
    <nav className="flex flex-col h-screen justify-between py-6 px-6 bg-white border-r border-gray-200" style={{height: "100%"}}>
      {/* Top section with logo, search and navigation */}
      <div className="flex flex-col items-center gap-11 pt-4">
        {/* Logo */}
        <h1 className="font-bold text-black text-4xl leading-tight text-center">
          Efandex
        </h1>

        {/* Search box */}
        <div className="w-full p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center gap-4">
            <img src="/icons-1.svg" alt="Upward Arrow" className="w-6 h-6 inline-block" />
            <span className="font-normal text-gray-600 text-base">
              Search...
            </span>
          </div>
        </div>

        {/* Navigation menu items */}
        <div className="flex flex-col items-start gap-6 w-full">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2.5 p-4 rounded-lg w-full cursor-pointer transition-all ${
                item.active ? "bg-black text-white" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4 w-full">
                <img src={item.icon} alt={item.label} className="w-6 h-6 inline-block" />
                <span className={`font-normal text-base whitespace-nowrap ${
                  item.active ? "text-white" : "text-gray-900"
                }`}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section with privacy policy and logout */}
      <div className="flex flex-col items-start gap-2 w-full">
        {/* Privacy Policy */}
        {footerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 p-4 rounded-lg w-full cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center gap-4 w-full">
              {/* vuesax-outline-book-saved.svg */}
               <img src="/vuesax-outline-book-saved.svg" alt="Upward Arrow" className="w-6 h-6 inline-block" />
              <span className="font-normal text-gray-900 text-base whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </div>
        ))}

        {/* Logout button */}
        <div className="bg-red-500 rounded-lg w-full cursor-pointer hover:bg-red-600 transition-colors">
          <div className="p-4 rounded-lg">
            <div className="flex items-center gap-4 w-full">
             <img src="/icons.svg" alt="Upward Arrow" className="w-6 h-6 inline-block" />
              <span className="font-normal text-white text-base whitespace-nowrap">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  // Dashboard Header Section
  const DashboardSection = () => (
    <div className="flex flex-col w-full items-end justify-center bg-white border-b border-gray-200">
      <header className="flex items-center justify-end px-12 py-5 w-full bg-transparent">
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <img src="/vuesax-outline-notification-bing.svg" alt="Upward Arrow" className="w-6 h-6 inline-block" />
          </button>

          <div className="flex items-center justify-center gap-1.5 p-2.5 bg-gray-100 rounded-full">
            {/* vuesax-outline-global.svg */}
            <img src="/vuesax-outline-global.svg" alt="Globe Icon" className="w-6 h-6 inline-block" />
            <span className="font-normal text-gray-700 text-sm">EN</span>
            <div className="h-4 w-px bg-gray-300 mx-1" />
            <span className="font-normal text-gray-700 text-sm">USD</span>
          </div>

          <button className="h-10 px-1 py-2 rounded-full border-2 border-black flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              {/* ellipse-1176.svg */}
              <img src="/ellipse-1176.svg" alt="User Avatar" className="w-8 h-8 rounded-full" />
            </div>
            {/* vuesax-outline-arrow-down.svg */}
            <img src="/vuesax-outline-arrow-down.svg" alt="Dropdown Arrow" className="w-4 h-4 inline-block" />
          </button>
        </div>
      </header>
    </div>
  );

  // Main Content Section
  const MainContentSection = () => (
    <div className="flex flex-col gap-5 w-full max-w-6xl">
      {/* Metric Cards */}
        <div className="flex w-full gap-6">
          {/* Card 1: Active Users */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <select className="px-3 py-2 text-gray-700 text-sm font-semibold border border-gray-300 rounded-lg bg-white">
            <option>Last Month</option>
            <option>This Month</option>
            <option>Last Year</option>
              </select>
              <div className="flex items-center">
            <span className="text-lg">
              <img src="/arrowfatlinesup.svg" alt="Upward Arrow" className="w-4 h-4 inline-block" />
            </span>
            <span className="text-xs ml-2 text-green-600">
              30.5626%
            </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
            <div>
              <div className="text-gray-700 text-base font-medium">
                Active Users
              </div>
              <div className="text-black text-2xl font-bold">
                3632
              </div>
            </div>
            <div className="text-gray-500 text-xs font-medium">
              Overall last month
            </div>
              </div>
              <div className="w-32 h-20 flex items-center justify-center">
            <img src="/sale-graph.png" alt="Chart Icon" className="w-26 h-22 inline-block" />
            <img src="/mask-group.png" alt="Mask Group" className="w-30 h-0.5 absolute top-66" />
              </div>
            </div>
          </div>
            </div>
          </div>
          {/* Card 2: Total Properties */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <select className="px-3 py-2 text-gray-700 text-sm font-semibold border border-gray-300 rounded-lg bg-white">
            <option>Last Month</option>
            <option>This Month</option>
            <option>Last Year</option>
              </select>
              <div className="flex items-center">
            <span className="text-lg">
              <img src="/arrowfatlinesup.svg" alt="Upward Arrow" className="w-4 h-4 inline-block" />
            </span>
            <span className="text-xs ml-2 text-green-600">
              30.5626%
            </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
            <div>
              <div className="text-gray-700 text-base font-medium">
                Total Properties
              </div>
              <div className="text-black text-2xl font-bold">
                10k+
              </div>
            </div>
            <div className="text-gray-500 text-xs font-medium">
              Overall last month
            </div>
              </div>
              <div className="w-32 h-20 flex items-center justify-center">
            <img src="/group-9.png" alt="Chart Icon" className="w-26 h-22 inline-block" />
            <img src="/mask-group.png" alt="Mask Group" className="w-30 h-0.5 absolute top-66" />
              </div>
            </div>
          </div>
            </div>
          </div>
          {/* Card 3: Total Revenue */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <select className="px-3 py-2 text-gray-700 text-sm font-semibold border border-gray-300 rounded-lg bg-white">
            <option>Last Month</option>
            <option>This Month</option>
            <option>Last Year</option>
              </select>
              <div className="flex items-center">
            <span className="text-lg">
              <img src="/arrowfatlinesup-2.svg" alt="Upward Arrow" className="w-4 h-4 inline-block" />
            </span>
            <span className="text-xs ml-2 text-red-500">
              30.5626%
            </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
            <div>
              <div className="text-gray-700 text-base font-medium">
                Total Revenue
              </div>
              <div className="text-black text-2xl font-bold">
                $900K
              </div>
            </div>
            <div className="text-gray-500 text-xs font-medium">
              Overall this month
            </div>
              </div>
              <div className="w-32 h-20 flex items-center justify-center">
            <img src="/group-30.png" alt="Chart Icon" className="w-26 h-22 inline-block" />
            <img src="/mask-group.png" alt="Mask Group" className="w-30 h-0.5 absolute top-66" />
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* Recent Bookings Table */}
      <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-row items-center justify-between px-6 pt-5 pb-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Bookings</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg w-96">
              <span className="text-lg">
                <img src="/search-normal.png" alt="Upward Arrow" className="w-4 h-4 inline-block" />
              </span>
              <input
                className="flex-1 border-none bg-transparent text-gray-600 text-sm placeholder-gray-400 focus:outline-none"
                placeholder="Search here..."
              />
              <div className="flex items-center gap-1.5 px-1.5 py-1 bg-gray-200 rounded-md">
                <span className="text-gray-600 text-sm">
                  <img src="/command.png" alt="Search Icon" className="w-4 h-4 inline-block" />
                   &nbsp; F</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <button className="px-6 py-2 text-black text-sm font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Today   <img src="/calendar-1.png" alt="Calendar Icon" className="inline-block w-4 h-4" />
              </button>
              <button className="px-6 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Export <img src="/vuesax-outline-send-2.svg" alt="Export Icon" className="inline-block w-4 h-4" />
              </button>
            </div>
            {/* <MoreVerticalIcon className="w-5 h-5 text-gray-400 cursor-pointer" /> */}
            <img src="/more-vertical.svg" alt="Filter Icon" className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {booking.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={booking.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.capacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-xs font-medium text-black flex items-center gap-1.5 hover:text-gray-700 transition-colors">
                      View Booking Details →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              {/* <ArrowLeftIcon className="w-4 h-4" /> */}
              <img src="/arrow-left.svg" alt="Previous Icon" className="w-4 h-4 inline-block" />
              <span className="text-sm font-medium text-gray-700">Previous</span>
            </button>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <button
                key={index}
                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm ${
                  page === 1 ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"
                } transition-colors`}
              >
                {page}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <span className="text-sm font-medium text-gray-700">Next</span>
              {/* <ArrowRightIcon className="w-4 h-4" /> */}
              <img src="/arrow-right.svg" alt="Next Icon" className="w-4 h-4 inline-block" />
            </button>
          </div>
        </div>
      </div>

      {/* New User Registrations Table */}
      <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-row items-center justify-between px-6 pt-5 pb-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">New User Registrations</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg w-96">
              <span className="text-lg">
                <img src="/search-normal.png" alt="Upward Arrow" className="w-4 h-4 inline-block" />
              </span>
              <input
                className="flex-1 border-none bg-transparent text-gray-600 text-sm placeholder-gray-400 focus:outline-none"
                placeholder="Search here..."
              />
              <div className="flex items-center gap-1.5 px-1.5 py-1 bg-gray-200 rounded-md">
                <span className="text-gray-600 text-sm">
                  <img src="/command.png" alt="Search Icon" className="w-4 h-4 inline-block" />
                   &nbsp; F</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <button className="px-6 py-2 text-black text-sm font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Today   <img src="/calendar-1.png" alt="Calendar Icon" className="inline-block w-4 h-4" />
              </button>
              <button className="px-6 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Export <img src="/vuesax-outline-send-2.svg" alt="Export Icon" className="inline-block w-4 h-4" />
              </button>
            </div>
            {/* <MoreVerticalIcon className="w-5 h-5 text-gray-400 cursor-pointer" /> */}
            <img src="/more-vertical.svg" alt="Filter Icon" className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userRegistrations.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <CategoryBadge category={user.category} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 cursor-pointer hover:bg-red-200 transition-colors">
                        ✕ Decline
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 cursor-pointer hover:bg-green-200 transition-colors">
                        ✓ Approve
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              {/* <ArrowLeftIcon className="w-4 h-4" /> */}
              <img src="/arrow-left.svg" alt="Previous Icon" className="w-4 h-4 inline-block" />
              <span className="text-sm font-medium text-gray-700">Previous</span>
            </button>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <button
                key={index}
                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm ${
                  page === 1 ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"
                } transition-colors`}
              >
                {page}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <span className="text-sm font-medium text-gray-700">Next</span>
              {/* <ArrowRightIcon className="w-4 h-4" /> */}
              <img src="/arrow-right.svg" alt="Next Icon" className="w-4 h-4 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-gray-50 flex flex-row w-full" style={{ height: "1414px" }}>
      {/* Navigation Menu */}
      <aside className="" style={{width: "266px", height: "1024px"}}>
        <NavigationMenuSection />
      </aside>
      <div className="flex flex-col flex-1">
        <header className="w-full">
          <DashboardSection />
        </header>
        <section className="flex-1 px-8 py-6">
          <MainContentSection />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;