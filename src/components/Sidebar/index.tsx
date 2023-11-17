import React, { ReactNode, useContext } from "react";
import { MdSettings } from "react-icons/md";
import { SideBarContext } from "../../contexts/SideBarContext/SideBarProvider";
import cn from "classnames";
import { TbBrandReact } from "react-icons/tb";

interface TSidebarProps {
  children?: ReactNode;
}

const Sidebar: React.FC<TSidebarProps> = (props) => {
  const { sidebar_expanded } = useContext(SideBarContext);

  return (
    <div
      className={cn(
        "fixed  h-full bg-black top-0 left-0 flex flex-col items-center justify-between ease-in-out duration-200",
        sidebar_expanded ? "w-60" : "w-16"
      )}
    >
      <div className="w-full flex flex-col justify-center items-center text-white gap-4">
        <div className="bg-purple-950 w-full h-16 flex items-center justify-center gap-3">
          <TbBrandReact size={30} />
          {sidebar_expanded && (
            <p className="text-[30px] font-medium italic">React</p>
          )}
        </div>
        {props.children}
      </div>
      <div className="flex flex-col text-white gap-8">
        <MdSettings size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
