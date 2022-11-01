import React from "react";

import "./Keys.scss";

import { BlackKey } from "./BlackKey";
import { WhiteKey } from "./WhiteKey";

export function Keys(props) {
  return (
    <div className="keys">
      <div className="white-keys">
        <WhiteKey note="C5" playKey={props.keyCode} />
        <WhiteKey note="D5" playKey={props.keyCode} />
        <WhiteKey note="E5" playKey={props.keyCode} />
        <WhiteKey note="F5" playKey={props.keyCode} />
        <WhiteKey note="G5" playKey={props.keyCode} />
        <WhiteKey note="A5" playKey={props.keyCode} />
        <WhiteKey note="B5" playKey={props.keyCode} />
        <WhiteKey note="C6" playKey={props.keyCode} />
        <WhiteKey note="D6" playKey={props.keyCode} />
        <WhiteKey note="E6" playKey={props.keyCode} />
        <WhiteKey note="F6" playKey={props.keyCode} />
        <WhiteKey note="G6" playKey={props.keyCode} />
        <WhiteKey note="A6" playKey={props.keyCode} />
        <WhiteKey note="B6" playKey={props.keyCode} />
        <WhiteKey note="C7" playKey={props.keyCode} />
      </div>
      <div className="black-keys">
        <BlackKey note="Csh5" playKey={props.keyCode} />
        <BlackKey note="Dsh5" playKey={props.keyCode} />
        <BlackKey note="Fsh5" playKey={props.keyCode} />
        <BlackKey note="Gsh5" playKey={props.keyCode} />
        <BlackKey note="Ash5" playKey={props.keyCode} />
        <BlackKey note="Csh6" playKey={props.keyCode} />
        <BlackKey note="Dsh6" playKey={props.keyCode} />
        <BlackKey note="Fsh6" playKey={props.keyCode} />
        <BlackKey note="Gsh6" playKey={props.keyCode} />
        <BlackKey note="Ash6" playKey={props.keyCode} />
      </div>
    </div>
  );
}
