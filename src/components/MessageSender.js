import React from "react";

function MessageSender() {
  return (
    <div className="w-full my-5 p-5 rounded-md message-sender">
      <div className="message py-4 flex border border-b-gray-500">
        <img
          src={require("../assets/bakos.jpg")}
          className="rounded-full w-12 h-auto hover:scale-110 transform transition-all duration-200 ease-in-out cursor-pointer"
          alt="Me"
        />
        <input
          className="ml-5 p-3 w-full rounded-full outline-none border-none message-input"
          type="text"
          placeholder="Whats on your mind, Bakos"
        />
      </div>

      <div className="additional py-2 flex items-center w-full">
        <div className="live flex w-full items-center rounded-md p-1.5 mx-1 hover:bg-gray-500">
          <img
            src={require("../assets/video-camera.png")}
            alt="Camera icon"
            className="w-10 h-auto"
          />
          <p className="font-bold pl-4">Live video</p>
        </div>

        <div className="photos flex w-full items-center rounded-md p-1.5 mx-1 hover:bg-gray-500">
          <img
            src={require("../assets/image-gallery.png")}
            alt="Gallery icon"
            className="w-10 h-auto"
          />
          <p className="font-bold pl-4">Photos</p>
        </div>

        <div className="feeling flex w-full items-center rounded-md p-1.5 mx-1 hover:bg-gray-500">
          <img
            src={require("../assets/smile.png")}
            alt="Smile icon"
            className="w-10 h-auto"
          />
          <p className="font-bold pl-4">Feeling</p>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
