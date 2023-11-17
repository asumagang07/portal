import React, { FC, useContext } from "react";
import { TTabProps } from "./types";
import { SideBarContext } from "../../contexts/SideBarContext/SideBarProvider";
import cn from "classnames";
import { IoBarbellSharp } from "react-icons/io5";

const Tab: FC<TTabProps> = (props) => {
  const { sidebar_expanded } = useContext(SideBarContext);
  const { className, icon, label, onClick, active } = props;

  return (
    <div
      onClick={onClick}
      className={cn(
        "h-8 w-full flex items-center gap-2 cursor-pointer",
        sidebar_expanded ? "justify-center" : "justify-start",
        { ["text-blue-500"]: active },
        className
      )}
    >
      {icon}
      {!sidebar_expanded && <p>{label}</p>}
      {/* {active === true && (
        <div
          className={cn(" absolute left-[-50px] text-white", {
            ["hidden"]: sidebar_expanded,
          })}
        >
          <IoBarbellSharp size={80} />
        </div>
      )} */}
    </div>
  );
};

export default Tab;
