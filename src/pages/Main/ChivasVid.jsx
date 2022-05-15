import React from "react";
import chivas from "../../videos/chivasvid.mp4";

const ChivasVid = () => {
  return (
    <video
      style={{ maxHeight: "800px", marginTop: "-50px" }}
      controls
      autostart
      autoPlay
      loop
      muted
      src={chivas}
      type="video/mp4"
    />
  );
};

export default ChivasVid;
