const Header = () => {
  return (
    <div className="flex p-1.5 px-2.5 justify-between Header">
      <div className="flex items-center">
        <img
          src={require("../assets/facebook.png")}
          className="block w-9 h-auto"
          alt="Facebook logo"
        />
        <div className="flex items-center p-3 m-1 rounded-3xl header_input">
          <img
            className="w-5 h-auto"
            src={require("../assets/search.png")}
            alt="Search icon"
          />
          <input
            className="bg-transparent outline-none border-none pl-1.5"
            type="text"
            placeholder="Searching on Facebook"
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="header-home">
          <img
            className="w-9 h-auto"
            src={require("../assets/home.png")}
            alt="Home icon"
          />
        </div>
        <div className="header-watch">
          <img
            className="w-9 h-auto"
            src={require("../assets/watch.png")}
            alt="Watch icon"
          />
        </div>
        <div className="header-store">
          <img
            className="w-9 h-auto"
            src={require("../assets/store.png")}
            alt="Store icon"
          />
        </div>
        <div className="header-people">
          <img
            className="w-9 h-auto"
            src={require("../assets/people.png")}
            alt="People icon"
          />
        </div>
        <div className="header-console">
          <img
            className="w-9 h-auto"
            src={require("../assets/console.png")}
            alt="Console icon"
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="">
          <img
            className="w-9 h-auto"
            src={require("../assets/setting.png")}
            alt="Setting icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
