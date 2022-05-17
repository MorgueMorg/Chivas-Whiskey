import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const UtilsPage = () => {
  return (
    <div className="Utils">
      <img
        src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/60e6cc032ba12.jpeg"
        alt=""
      />
      <div className="btns">
        <Link to="/auth" className="auto-btn" variant="contained">
          <Button className="btn-outline" type="submit" color="success" variant="contained">
            Authorization
          </Button>
        </Link>
        <Link to="/chat" className="chat-btn">
          <Button className="btn-outline" type="submit" color="secondary" variant="contained">
            Chat
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UtilsPage;
