import React, { useRef, useState } from "react";
import Post from "../components/Post";
import icon from "../assets/bakos.jpg";

function MessageSender() {
  let post = useRef("");
  const [posts, setPosts] = useState([
    {
      content: "Goood morning Vietnam!!",
      user: "Bakos János",
      timestamp: "30 m",
      Icon: icon,
      id: 0,
    },
  ]);

  const addPost = (e) => {
    if (e.key === "Enter") {
      const newPosts = [
        ...posts,
        {
          content: post.current.value,
          user: "Bakos Janos",
          timestamp: "53 m",
          Icon: icon,
          id: posts[posts.length - 1].id + 1,
        },
      ];

      setPosts(newPosts);
    }
  };

  return (
    <div className="message-container w-full">
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
            ref={post}
            onKeyPress={addPost}
          />
        </div>

        <div className="additional py-2 flex items-center w-full">
          <div className="live flex w-full items-center rounded-md p-1.5 mx-1 hover:bg-gray-500 transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={require("../assets/video-camera.png")}
              alt="Camera icon"
              className="w-10 h-auto"
            />
            <p className="font-bold pl-4">Live video</p>
          </div>

          <div className="photos flex w-full items-center rounded-md p-1.5 mx-1 hover:bg-gray-500 transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={require("../assets/image-gallery.png")}
              alt="Gallery icon"
              className="w-10 h-auto"
            />
            <p className="font-bold pl-4">Photos</p>
          </div>

          <div className="feeling flex w-full items-center rounded-md p-1.5 mx-1 hover:bg-gray-500 transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={require("../assets/smile.png")}
              alt="Smile icon"
              className="w-10 h-auto"
            />
            <p className="font-bold pl-4">Feeling</p>
          </div>
        </div>
      </div>

      {<Post posts={posts} />}
    </div>
  );
}

export default MessageSender;
