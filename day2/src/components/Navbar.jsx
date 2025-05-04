import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      <div className="div flex justify-between px-20 py-4 bg-gray-800 text-gray-50 font-sans ">
        <div className="div ">
          <span className="hover:text-blue-700">Edit on Github</span>
        </div>
        <div className="div flex justify-center items-center space-x-4">
          <span className="hover:text-blue-700">Tv</span>
          <span className="hover:text-blue-700">Mobile</span>
          <span className="hover:text-blue-700">Tablet</span>
        </div>
        <div className="div flex justify-center items-center space-x-4">
          <span className="hover:text-blue-700">RTL</span>
          <span className="hover:text-blue-700">BRN</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
