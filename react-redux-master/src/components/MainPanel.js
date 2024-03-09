import React from "react";
import DivPanel  from "./DivPanel";
import MyButton from "./MyButton";

const mainPanel = () => {
  return (
    <div className="main-panel">
        This is main panel <MyButton></MyButton>
        <DivPanel></DivPanel>
    </div>
  );
};

export default mainPanel;
