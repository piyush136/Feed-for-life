// import React from "react"
// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../Components/Dashboard/Sidebar"


// const Dashboard = () => {

//     const {loading:authLoading} = useSelector((state)=>state.auth);
//     const{loading:profileLoading} = useSelector((state)=>state.profile);


//     if(profileLoading||authLoading){
//         return (
//             <div className="mt-10">
//                 Loading...
//             </div>
//         )
//     }
//   return (
//     <div className="relative flex">
//         <Sidebar className="ml-10"/>
//         <div className="min-h-[calc(100vh-3.5rem)] mx-auto ">
//             <div className="mx-auto w-11/12 py-10 min-w-[1000px]">
//                 <Outlet/>
//             </div>
        
//         </div>
      
//     </div>
//   )
// };

// export default Dashboard;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Sidebar from "../Components/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (authLoading || profileLoading) {
    return <div className="mt-10 text-white text-center">Loading...</div>;
  }

  return (
    <div className="relative min-h-screen flex bg-richblack-900 text-white">
      
      {/* Sidebar Toggle Button (mobile only) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-16 left-4 z-[100] bg-richblack-700 hover:bg-richblack-600 p-3 rounded-full shadow-md border border-richblack-600"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? (
          <FiChevronLeft size={22} />
        ) : (
          <FiChevronRight size={22} />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-14 left-0 z-50 h-[calc(100vh-3.5rem)] bg-richblack-800 border-r border-richblack-700 
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:static md:translate-x-0 md:flex
        `}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 w-full overflow-x-hidden mt-14 md:mt-0">
        <div className="mx-auto w-11/12 py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
