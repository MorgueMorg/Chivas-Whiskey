import React from "react";
import lalisa from "../../videos/lalisa.mp4";

const LisaVid = () => {
  return (
    <video
      style={{ maxHeight: "800px", marginTop: "-50px" }}
      controls
      autostart
      autoPlay
      loop
      muted
      src={lalisa}
      type="video/mp4"
    />
  );
};

export default LisaVid;
