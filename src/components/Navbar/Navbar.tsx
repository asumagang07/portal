import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white h-16 flex items-center justify-between px-4">
      <div className="">Navbar</div>
      <div className="">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://images.pexels.com/photos/191340/pexels-photo-191340.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
