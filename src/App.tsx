import React, { useContext } from "react";
import "./App.css";
import { Dashboard } from "./pages";
import Sidebar from "./components/Sidebar";
import { SideBarContext } from "./contexts/SideBarContext/SideBarProvider";
import cn from "classnames";

function App() {
  const { sidebar_expanded } = useContext(SideBarContext);

  return (
    <div className="relative h-screen w-screen bg-white">
      <Sidebar />
      <div
        style={{
          width: sidebar_expanded
            ? "calc(100vw - 4rem)"
            : "calc(100vw - 15rem)",
        }}
        className={cn(
          "ease-in-out duration-200 h-full p-3",
          sidebar_expanded ? "ml-16" : "ml-60"
        )}
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
