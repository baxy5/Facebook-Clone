import React from "react";

function Post({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post w-full my-5 rounded-md">
          <div className="user-information p-3 flex items-center">
            <img
              src={post.Icon}
              alt="Me"
              className="rounded-full"
              width="50"
              height="auto"
            />
            <div className="user px-3 text-sm">
              <p className="font-bold">{post.user}</p>
              <p>{post.timestamp}</p>
            </div>
          </div>
          <div className="post-content flex items-center justify-center w-full h-52 bg-red-500">
            <p className="font-bold text-lg">{post.content}</p>
          </div>
          <div className="likes flex p-4">
            <div className="like w-full flex justify-center items-center p-1.5 mx-1.5 rounded-md hover:bg-gray-400 transition-all duration-300 ease-in-out cursor-pointer">
              <img
                src={require("../assets/like.png")}
                alt="Like icon"
                width="25"
                height="auto"
              />
              <p className="px-1.5 font-bold">Like</p>
            </div>
            <div className="comment w-full flex justify-center items-center p-1.5 mx-1.5 rounded-md hover:bg-gray-400 transition-all duration-300 ease-in-out cursor-pointer">
              <img
                src={require("../assets/comment.png")}
                alt="Like icon"
                width="25"
                height="auto"
              />
              <p className="px-1.5 font-bold">Comment</p>
            </div>
            <div className="share w-full flex justify-center items-center p-1.5 mx-1.5 rounded-md hover:bg-gray-400 transition-all duration-300 ease-in-out cursor-pointer">
              <img
                src={require("../assets/share.png")}
                alt="Like icon"
                width="25"
                height="auto"
              />
              <p className="px-1.5 font-bold">Share</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
