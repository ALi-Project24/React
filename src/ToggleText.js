import React, { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hidden Matn" : "Namayesh matn"}
      </button>
      {isVisible && (
        <p style={{ marginTop: "20px", fontSize: "24px" }}>Hello world!</p>
      )}
    </div>
  );
};

export default ToggleText;
