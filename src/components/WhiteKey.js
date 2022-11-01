import React from "react";

import "./WhiteKey.scss";

export function WhiteKey(props) {
  function handleClick() {
    let audio = new Audio(`/assets/keys/${props.note}.ogg`);
    audio.play();
  }

  return (
    <div
      className="white-key"
      onClick={() => {
        handleClick();
      }}
    ></div>
  );
}
