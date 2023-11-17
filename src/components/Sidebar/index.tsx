import React, { useContext } from "react";
import {
  MdDashboard,
  MdCameraRear,
  MdChat,
  MdSettings,
  MdMenu,
} from "react-icons/md";
import { SideBarContext } from "../../contexts/SideBarContext/SideBarProvider";
import cn from "classnames";

const Sidebar = () => {
  const { sidebar_expanded, setSidebarExpanded } = useContext(SideBarContext);

  return (
    <div
      className={cn(
        "fixed  h-full bg-black top-0 left-0 flex flex-col items-center justify-between py-4 ease-in-out duration-200",
        sidebar_expanded ? "w-16" : "w-60"
      )}
    >
      <div className="w-full flex flex-col justify-center items-center text-white gap-8">
        <div className=" flex items-center gap-2">
          <MdMenu
            size={20}
            onClick={() => setSidebarExpanded(!sidebar_expanded)}
          />
          {!sidebar_expanded && <p>Menu</p>}
        </div>
        <div className="flex items-center gap-2">
          <MdDashboard size={20} />
          {!sidebar_expanded && <p>Menu</p>}
        </div>
        <div className="flex items-center gap-2">
          <MdCameraRear size={20} />
          {!sidebar_expanded && <p>Menu</p>}
        </div>
        <div className="flex items-center gap-2">
          <MdChat size={20} />
          {!sidebar_expanded && <p>Menu</p>}
        </div>
      </div>
      <div className="flex flex-col text-white gap-8">
        <MdSettings size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
