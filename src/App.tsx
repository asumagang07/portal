import React from "react";
import "./App.css";
import { Dashboard } from "./pages";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative h-screen w-screen bg-white">
      <Sidebar />
      <div style={{ width: "calc(100vw - 5rem)" }} className="h-full p-3 ml-20">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
