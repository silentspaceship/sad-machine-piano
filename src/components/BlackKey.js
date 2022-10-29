import React from "react";

import "./BlackKey.scss";

export function BlackKey(props) {
  function handleClick(event) {
    let element = event.target;
    let audio = new Audio(`/assets/keys/${props.note}.ogg`);
    audio.play();
  }

  return (
    <div
      className={`black-key ${props.note}`}
      onClick={(event) => handleClick(event)}
    ></div>
  );
}
