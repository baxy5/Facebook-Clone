const Header = () => {
  return (
    <div className="flex px-2.5 justify-between Header my-1.5">
      <div className="flex items-center">
        <img
          src={require("../assets/facebook.png")}
          className="block w-9 h-auto"
          alt="Facebook logo"
        />
        <div className="flex items-center p-3 m-1 rounded-3xl header_input">
          <img
            className="w-5 h-auto cursor-pointer"
            src={require("../assets/search.png")}
            alt="Search icon"
          />
          <input
            className="bg-transparent outline-none border-none pl-1.5 focus:pl-7 transition-all ease-in-out duration-300 group-hover:hidden"
            type="text"
            placeholder="Searching on Facebook"
          />
        </div>
      </div>

      <div className="flex items-center header-middle">
        <div className="header-home rounded-md relative transition-all transition ease-in-out duration-300 cursor-pointer mx-2 py-5  px-7 h-full after:content-[''] after:block after: after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full">
          <img
            className="w-9 h-auto"
            src={require("../assets/home.png")}
            alt="Home icon"
          />
        </div>
        <div className="header-watch rounded-md transition-all transition ease-in-out duration-300 cursor-pointer mx-2 py-5 px-7">
          <img
            className="w-9 h-auto"
            src={require("../assets/watch.png")}
            alt="Watch icon"
          />
        </div>
        <div className="header-store rounded-md transition-all transition ease-in-out duration-300 cursor-pointer py-5 mx-2 px-7">
          <img
            className="w-9 h-auto"
            src={require("../assets/store.png")}
            alt="Store icon"
          />
        </div>
        <div className="header-people rounded-md transition-all transition ease-in-out duration-300 cursor-pointer py-5 mx-2 px-7">
          <img
            className="w-9 h-auto"
            src={require("../assets/people.png")}
            alt="People icon"
          />
        </div>
        <div className="header-console rounded-md transition-all transition ease-in-out duration-300 cursor-pointer py-5 mx-2 px-7">
          <img
            className="w-9 h-auto"
            src={require("../assets/console.png")}
            alt="Console icon"
          />
        </div>
      </div>

      <div className="header-setting flex items-center rounded-md">
        <div className="rounded-full flex items-center hover:bg-gray-500 transition-all ease-in-out duration-300 cursor-pointer mx-2 p-2">
          <img
            className="w-10 h-auto rounded-full"
            src={require("../assets/bakos.jpg")}
          />
          <p className="px-2 font-bold">Bakos</p>
        </div>
        <div className="rounded-full hover:bg-gray-500 transition-all ease-in-out duration-300 cursor-pointer mx-2 p-2">
          <img
            className="w-6 h-auto"
            src={require("../assets/messenger.png")}
            alt="Messenger icon"
          />
        </div>
        <div className="rounded-full hover:bg-gray-500 transition-all ease-in-out duration-300 cursor-pointer mx-2 p-2">
          <img
            className="w-6 h-auto"
            src={require("../assets/setting.png")}
            alt="Setting icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
