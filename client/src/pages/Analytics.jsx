import { React, useState } from "react";
import { UserIcon } from "../components/shared/Icons";
import { Link } from "react-router-dom";

function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="">
        <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            {/* <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" /> */}
            <h1>ram ram</h1>
          </button>
          <div className="flex-1 flex justify-between px-4 md:px-0">
            <div className="flex-1 my-2 flex">
              <Link to="/" className="nav-link">
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 ml-8">
                  Home
                </div>
              </Link>
            </div>

            <div className="flex items-center  mx-4">
              <UserIcon />
              <div className="flex mx-4 text-lg">
                <h3>Welcom </h3>
                <h3>{"e Pratik"}</h3>
              </div>
            </div>
            <div className="ml-4 flex mr-4 items-center md:ml-6">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
