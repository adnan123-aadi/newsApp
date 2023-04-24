import React from "react";
import broken from "./Broken circle.gif";
import "../App.css";
export default function Spinner() {
  return (
    <div className="text-center spinnn">
      <img src={broken} alt="" />
    </div>
  );
}
