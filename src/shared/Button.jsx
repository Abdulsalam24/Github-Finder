import React from "react";

function Button({ absolute, children }) {
  return <div className={`btn ${absolute && "absolute"}`}>
    {children}
    </div>;
}

export default Button;
