import React from "react";

function logo() {
  return (
    <div className="logo">
      <img
        src={require("../assets/icons/hackeru-logo.png")}
        alt="hackeru logo"
      />
    </div>
  );
}

export default logo;
