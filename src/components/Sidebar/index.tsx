import React from "react";
import { MdDashboard, MdCameraRear, MdChat, MdSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="fixed w-20 h-full bg-black top-0 left-0 flex flex-col items-center justify-between py-4">
      <div className="flex flex-col text-white gap-8">
        <MdDashboard size={20} />
        <MdCameraRear size={20} />
        <MdChat size={20} />
      </div>
      <div className="flex flex-col text-white gap-8">
        <MdSettings size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
