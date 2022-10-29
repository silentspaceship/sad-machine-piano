import React from "react";

import "./WhiteKey.scss";

export function WhiteKey(props) {
  function handleClick(event) {
    let element = event.target;
    let audio = new Audio(`/assets/keys/${props.note}.ogg`);
    audio.play();
  }

  return (
    <div
      className="white-key"
      onClick={(event) => {
        handleClick(event);
      }}
    ></div>
  );
}
