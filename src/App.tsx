import React, { useContext, useState } from "react";
import "./App.css";
import { Dashboard } from "./pages";
import Sidebar from "./components/Sidebar";
import { SideBarContext } from "./contexts/SideBarContext/SideBarProvider";
import cn from "classnames";
import { MdCardMembership, MdMenu } from "react-icons/md";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { IoBarbellSharp } from "react-icons/io5";
import Tab from "./components/Tab/Tab";
import { Navbar, TTabProps } from "./components";

const App = () => {
  const { sidebar_expanded, setSidebarExpanded } = useContext(SideBarContext);
  const [active, setactive] = useState(false);

  const sidebardata: TTabProps[] = [
    {
      icon: sidebar_expanded ? (
        <TbLayoutSidebarLeftCollapse size={20} />
      ) : (
        <TbLayoutSidebarRightCollapse size={20} />
      ),
      label: "Menu",
      onClick: () => {
        setSidebarExpanded(!sidebar_expanded);
      },
      active: true,
    },
    {
      icon: <MdCardMembership size={20} />,
      label: "Membership",
      onClick: () => setSidebarExpanded(!sidebar_expanded),
      active: false,
    },
    {
      icon: <FaUsers size={20} />,
      label: "Coaches",
      onClick: () => setSidebarExpanded(!sidebar_expanded),
      active: false,
    },
    {
      icon: <IoBarbellSharp size={20} />,
      label: "Trainings",
      onClick: () => setSidebarExpanded(!sidebar_expanded),
      active: false,
    },
  ];

  return (
    <div className="relative h-screen w-screen bg-white">
      <Sidebar>
        {sidebardata.map((tab, index) => {
          return <Tab key={index} {...tab} />;
        })}
      </Sidebar>
      <div
        style={{
          width: sidebar_expanded
            ? "calc(100vw - 15rem)"
            : "calc(100vw - 4rem)",
        }}
        className={cn(
          "bg-gray-50 ease-in-out duration-200 h-full",
          sidebar_expanded ? "ml-60" : "ml-16"
        )}
      >
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
