import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title="Friends" />
      <SidebarRow title="Saved" />
      <SidebarRow title="Groups" />
    </div>
  );
};

export default Sidebar;
