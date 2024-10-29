"use client"
import ToggleText from "@/app/utils/ToggleText";

const VideoBoost = () => {
  return (
    <div className="wrapper video-boost">
      <div className="container">
        <h2 className="title">
          Why animation <span className="highlight">video is a boost</span> for
          businesses?
        </h2>
        <div className="description">
          <ToggleText
            text="In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available."
            maxLength={152}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoBoost;
