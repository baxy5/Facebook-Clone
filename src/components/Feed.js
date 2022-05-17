import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed flex flex-col justify-center items-center py-8 px-40">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
