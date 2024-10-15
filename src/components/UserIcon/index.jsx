

import React from "react";
import "./usericon.css";

function UserIcon({ name, available }) {
  const text = React.useMemo(() => {
    return name
      .split(" ")
      .map((item) => item[0])
      .join("");
  }, [name]);

  const backgroundColor = React.useMemo(() => {
    const colors = [
      "#7e1af0", // Default color
      "#ff6347", // Tomato
      "#3cb371", // MediumSeaGreen
      "#4682b4", // SteelBlue
      "#ff69b4", // HotPink
      "#ff4500", // OrangeRed
      "#8a2be2", // BlueViolet
      "#d2691e", // Chocolate
    ];
    // Use initials to pick a color (you can change this logic based on your needs)
    const charCodeSum = text
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[charCodeSum % colors.length]; // Choose color based on charCodeSum
  }, [text]);

  return (
    <div className="usericon-container" style={{ backgroundColor }}>
      <div className="usericon-text">{text}</div>
      <div className={`user-status ${available && "available"}`}></div>
    </div>
  );
}

export default UserIcon;
