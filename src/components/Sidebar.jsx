import SidebarRow from "./SidebarRow";
import People from "../assets/people.png";
import Saved from "../assets/save.png";
import Store from "../assets/store.png";
import Watch from "../assets/watch.png";
import DownArrow from "../assets/down-arrow.png";

const Sidebar = () => {
  return (
    <div className="sidebar py-6 px-5">
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Saved} title="Saved" />
      <SidebarRow Icon={People} title="Groups" />
      <SidebarRow Icon={Store} title="Marketplace" />
      <SidebarRow Icon={Watch} title="Watch" />
      <SidebarRow Icon={DownArrow} title="See more" />
    </div>
  );
};

export default Sidebar;
