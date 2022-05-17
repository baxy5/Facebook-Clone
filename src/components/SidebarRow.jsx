const SidebarRow = ({ title, Icon }) => {
  return (
    <div className="sidebar-row flex items-center cursor-pointer p-3 px-10 hover:rounded-xl hover:bg-gray-500 transition-all ease-in-out duration-300">
      <img src={Icon} width="35" height="auto" alt="Icon" />
      <p className="px-2.5 font-bold">{title}</p>
    </div>
  );
};

export default SidebarRow;
