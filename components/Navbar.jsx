import React from "react";

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] bg-red-400">
        <div>LOGO</div>
        <div className="">
          <ul className="flex items-center gap-[4vw]">
            <li><a href="#" className="hover:text-gray-500">Home</a></li>
            <li><a href="#" className="hover:text-gray-500">Courses</a></li>
            <li><a href="#" className="hover:text-gray-500">Tutorials</a></li>
            <li><a href="#" className="hover:text-gray-500">Notes</a></li>
            <li><a href="#" className="hover:text-gray-500">Blogs</a></li>
            <li><a href="#" className="hover:text-gray-500">Cheatsheets</a></li>
          </ul>
        </div>
        <div>
          <button className="bg-[#0059f1] text-white px-5 py-2 mx-2 rounded-full hover:bg-[#87acec]" >log in</button>
          <button className="bg-[#0059f1] text-white px-5 py-2 mx-2 rounded-full hover:bg-[#87acec]">sign up</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
