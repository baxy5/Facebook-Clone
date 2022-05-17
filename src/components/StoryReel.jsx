import React from "react";
import Story from "./Story";
import Reel1 from "../assets/StoryReel/reel1.jpg";
import Reel2 from "../assets/StoryReel/reel2.jpg";
import Reel3 from "../assets/StoryReel/reel3.jpg";
import Reel4 from "../assets/StoryReel/reel4.jpg";
import Reel5 from "../assets/StoryReel/reel5.jpg";

function StoryReel() {
  return (
    <div className="story-reel flex">
      <Story Image={Reel1} title="Reel One" />
      <Story Image={Reel2} title="Reel Two" />
      <Story Image={Reel3} title="Reel Three" />
      <Story Image={Reel4} title="Reel Four" />
      <Story Image={Reel5} title="Reel Five" />
    </div>
  );
}

export default StoryReel;
