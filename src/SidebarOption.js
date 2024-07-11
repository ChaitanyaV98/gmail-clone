import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOption ${selected ? "sidebarOption--active" : ""}`}>
      {/* when the slected is true then sidebarOption--active styles will be applied but by default sidebarOption will be applied*/}
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
