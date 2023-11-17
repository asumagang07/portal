import { FC, createContext, useState } from "react";

interface TPops {
  sidebar_expanded?: boolean;
  setSidebarExpanded?: any;
}

export const SideBarContext = createContext<TPops>({});

const SidebarProvider: FC<any> = (props) => {
  const [sidebar_expanded, setSidebarExpanded] = useState(false);
  return (
    <SideBarContext.Provider value={{ sidebar_expanded, setSidebarExpanded }}>
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SidebarProvider;
