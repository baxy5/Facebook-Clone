import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed flex flex-col justify-around items-center py-6 px-5">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
