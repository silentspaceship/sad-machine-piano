import React from "react";

import "./BlackKey.scss";

export function BlackKey(props) {
  switch (props.playKey) {
    case "KeyS":
      playAudio("Csh5");
      break;

    default:
      break;
  }

  function playAudio(note) {
    let audio = new Audio(`/assets/keys/${note}.ogg`);
    audio.play();
  }

  function handleClick() {
    playAudio(`${props.note}`);
  }
  return (
    <div
      className={`black-key ${props.note}`}
      onClick={(event) => handleClick(event)}
    ></div>
  );
}
