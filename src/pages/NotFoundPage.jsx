import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <svg viewBox="0 0 1000 400">
        <text id="willie" x="50%" y="50%" textAnchor="middle" fill="none">
          404
        </text>
        <use xlinkHref="#willie" className="will will1"></use>
        <use xlinkHref="#willie" className="will will2"></use>
        <use xlinkHref="#willie" className="will will3"></use>
        <use xlinkHref="#willie" className="will will4"></use>
        <use xlinkHref="#willie" className="will will5"></use>
      </svg>
    </div>
  );
};

export default NotFoundPage;