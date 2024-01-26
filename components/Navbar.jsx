import React from "react";

function Navbar() {
  return (
    <div>
      {/* logo */}
      <div>logo</div>
      {/* navbar links */}
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/courses"><li>Courses</li></a>
        <a href="/tutorials"><li>Totorials</li></a>
        <a href="/notes"><li>Notes</li></a>
        <a href="/blogs"><li>Blogs</li></a>
        <a href="/cheatsheets"><li>Cheatsheets</li></a>
      </ul>
      {/* navbar buttons */}
      <div>
        <button>Login</button>
        <button>sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
