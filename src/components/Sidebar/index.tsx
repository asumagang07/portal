import React, { ReactNode, useContext } from "react";
import { MdSettings } from "react-icons/md";
import { SideBarContext } from "../../contexts/SideBarContext/SideBarProvider";
import cn from "classnames";

interface TSidebarProps {
  children?: ReactNode;
}

const Sidebar: React.FC<TSidebarProps> = (props) => {
  const { sidebar_expanded } = useContext(SideBarContext);

  return (
    <div
      className={cn(
        "fixed  h-full bg-black top-0 left-0 flex flex-col items-center justify-between py-4 ease-in-out duration-200 px-4",
        sidebar_expanded ? "w-16" : "w-60"
      )}
    >
      <div className="w-full flex flex-col justify-center items-center text-white gap-6">
        {props.children}
      </div>
      <div className="flex flex-col text-white gap-8">
        <MdSettings size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
