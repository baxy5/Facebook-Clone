import React from "react";

function Story({ title, Image }) {
  return (
    <div className="story relative w-32 h-52 shadow-lg mr-3 rounded-xl hover:scale-110 transform transition-all duration-200 ease-in-out cursor-pointer">
      <img src={Image} className="w-full h-full" />
      <h4 className="absolute bottom-5 left-5 text-white font-bold ">
        {title}
      </h4>
    </div>
  );
}

export default Story;
