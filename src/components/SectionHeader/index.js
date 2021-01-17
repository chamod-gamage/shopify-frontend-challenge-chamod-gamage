import "../../App.css";
import React from "react";

//Reusable components for Section Headings (e.g Results)
const SectionHeader = (props) => (
  <div className="column">
    <div className="section-header">
      <div style={{ padding: "5px 5px 1px 10px" }}>
        <h2>{props.text}</h2>
      </div>
    </div>
    <div style={{ height: 10 }} />
  </div>
);

export default SectionHeader;
