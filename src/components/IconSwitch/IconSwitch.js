import React from "react";
import './main.css'

function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <span className="material-icons store__btn" onClick={onSwitch}>
      {icon}
    </span>
  );
}

export default IconSwitch;