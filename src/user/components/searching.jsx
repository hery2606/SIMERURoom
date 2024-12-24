import React from "react";
import { Link } from "react-router-dom";
import { User, ShoppingCart } from "react-feather";

const Layout = ({ children }) => (
    <div className="flex bg-gray-100">
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-white overflow-auto">
            {/* Searching Bar */}
            <div className="p-4 shadow-md bg-white sticky top-0 z-10">
                <div className="flex items-center justify-between">
                    {/* Search Input */}
                    <div className="flex items-center bg-gray-100 rounded-lg shadow-sm w-full md:w-2/3 lg:w-1/2">
                        <i className="bx bx-search-alt text-gray-500 text-2xl p-2"></i>
                        <input
                            type="text"
                            placeholder="Cari ruangan..."
                            className="flex-grow p-2 bg-transparent focus:outline-none" />
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                            Cari
                        </button>
                    </div>

                    {/* Icons: Profile and Cart */}
                    <div className="flex items-center mr-80">
                        <ShoppingCart
                            className="text-gray-600 cursor-pointer hover:text-indigo-600 mr-4"
                            size={24} />
                        <User
                            className="text-gray-600 cursor-pointer hover:text-indigo-600"
                            size={24} />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 md:p-8 bg-gray-50 flex-1 overflow-auto">
                {children}
            </div>
        </div>
    </div>
);

export default Layout;
